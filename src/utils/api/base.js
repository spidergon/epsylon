import Airtable from 'airtable';
import { airtableEnv } from './env';

const base = new Airtable({ apiKey: airtableEnv.apiKey }).base(airtableEnv.baseId);

/**
 * Create a contact entry.
 * @param {object} fields The fields to be created.
 */
export function createContact(fields) {
  return base('Contact').create([{ fields }]);
}
