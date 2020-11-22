import cogoToast from 'cogo-toast';

/**
 * Show a toast message to the user.
 * @param {string} msg The message.
 * @param {string} variant info | success | error.
 * @param {object} options Object containing : heading(string) | hideAfter(number) | position(string, ex: bottom-left).
 */
export default function toast(msg, variant = 'info', options = {}) {
  const { heading, hideAfter, position } = options;
  const { hide } = cogoToast[variant](msg, {
    heading: heading || (variant === 'error' ? 'Erreur !' : variant === 'success' ? "C'est un succès !" : ''),
    hideAfter: hideAfter || 10,
    position: position || 'top-center',
    onClick() {
      hide();
    },
  });
}
