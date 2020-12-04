import nodemailer from 'nodemailer';
import htmlToText from 'html-to-text';
import { mail } from './env';
import purify from './purify';

const { host, port, user, pass, from } = mail;

const transport = nodemailer.createTransport({
  host,
  port,
  secure: process.env.NODE_ENV === 'production',
  auth: { user, pass },
});

transport.verify((error) => {
  if (error) console.error('SMTP conf error: ', error);
});

export default function sendEmail({ to, subject, html }, next, fallback) {
  const cleanHtml = purify(html);
  transport.sendMail(
    {
      from,
      to,
      subject,
      html: cleanHtml,
      text: htmlToText.fromString(cleanHtml),
    },
    (err) => {
      if (err) return fallback(err);
      next();
    }
  );
}
