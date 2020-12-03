export const airtable = {
  apiKey: process.env.AIRTABLE_API_KEY,
  base: process.env.AIRTABLE_BASE_ID,
};

export const mail = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT || 587,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
  from: process.env.MAIL_FROM,
  toAdmin: process.env.MAIL_TO_ADMIN,
};
