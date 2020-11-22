import { createContact } from './_utils/base';
import purify from './_utils/purify';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default async (req, res) => {
  const response = (status, message, error) => {
    if (error) console.error('Error: ', { status, message, error });
    res.status(status).json({ status, message });
  };

  if (req.method !== 'POST' || !req.body) {
    return response(400, 'Invalid request', { method: req.method, body: req.body });
  }

  const { body } = req;

  // Check if they have filled out the honeypot
  if (body.visu) {
    return response(400, 'Boop beep bop zzzzstt good bye', `Robot detected! field: ${body.visu}`);
  }

  const requiredFields = ['name', 'email', 'message', 'consent'];
  for (const field of requiredFields) {
    if (!body[field]) {
      return response(400, 'Invalid request', `Field "${field}" required`);
    }
  }

  if (!emailPattern.test(body.email)) {
    return response(400, 'Invalid request', `Incorrect email: ${body.email}`);
  }

  if (typeof body.consent !== 'boolean') {
    return response(400, 'Invalid request', `Consent must be boolean: ${body.consent}`);
  }

  try {
    await createContact({
      Name: purify(body.name),
      Email: body.email,
      Message: purify(body.message),
      Consent: body.consent,
    });
    response(200, 'success');
  } catch (error) {
    return response(500, 'Internal error', error);
  }
};
