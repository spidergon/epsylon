import Airtable from 'airtable';
import { airtable } from './env';

const base = new Airtable({ apiKey: airtable.apiKey }).base(airtable.base);

export default base;

/**
 * Create a contact entry.
 * @param {object} fields The fields to be created.
 */
export function createContact(fields) {
  return base('Contact').create([{ fields }]);
}
