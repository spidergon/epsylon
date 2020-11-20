/**
 * Sanitize and encode all HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
export default function purify(html) {
  return html.replace(/[^\w. ]/gi, (c) => '&#' + c.charCodeAt(0) + ';');
}
