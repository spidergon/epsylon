import { createContact } from '@api/base';
import purify from '@api/purify';

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
  if (body.name || body.email) {
    return response(400, 'beep!');
  }

  const requiredFields = ['mailhgnxo', 'subject', 'message', 'consent'];
  for (const field of requiredFields) {
    if (!body[field]) {
      return response(400, 'Invalid request', `Field "${field}" required`);
    }
  }

  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailPattern.test(body.mailhgnxo)) {
    return response(400, 'Invalid request', `Incorrect email: ${body.mailhgnxo}`);
  }

  if (typeof body.consent !== 'boolean') {
    return response(400, 'Invalid request', `Consent must be boolean: ${body.consent}`);
  }

  try {
    await createContact({
      Name: body.nomodktl ? purify(body.nomodktl) : '',
      Email: body.mailhgnxo,
      Subject: purify(body.subject),
      Message: purify(body.message),
      Consent: body.consent,
    });
    response(200, 'success');
  } catch (error) {
    response(500, 'Internal error', error);
  }
};
