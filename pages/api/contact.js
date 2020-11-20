import { createContact } from './_utils/base';
import purify from './_utils/purify';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (req, res) => {
  const result = (status, message) => res.status(status).json({ status, message });

  if (req.method !== 'POST' || !req.body) {
    return result(400, 'Invalid request');
  }

  const { body } = req;

  // Check if they have filled out the honeypot
  if (body.visu) {
    return result(400, 'Boop beep bop zzzzstt good bye');
  }

  const requiredFields = ['name', 'email', 'msg', 'consent'];
  for (const field of requiredFields) {
    if (!body[field]) {
      return result(400, 'Invalid request');
    }
  }

  if (!emailPattern.test(body.email)) {
    return result(400, 'Invalid request');
  }

  createContact(
    {
      Name: purify(body.name),
      Email: body.email,
      Message: purify(body.msg),
      Consent: body.consent,
    },
    (err) => {
      if (err) {
        const { statusCode, error, message } = err;
        console.error('Error:', { statusCode, error, message });
        return result(500, 'Internal error');
      }
      result(200, 'success');
    }
  );
};
