import Airtable from 'airtable';
import { airtable } from './env';

const base = new Airtable({ apiKey: airtable.apiKey }).base(airtable.base);

export default base;

/**
 * Create a contact entry.
 * @param {object} fields The fields to be created.
 * @param {function} callback The callback function to run (parameters: err, records).
 */
export function createContact(fields, callback) {
  base('Contact').create([{ fields }], callback);
}
