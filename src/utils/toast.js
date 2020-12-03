import cogoToast from 'cogo-toast';

/**
 * Show a toast message to the user.
 * @param {string} msg The message.
 * @param {string} variant info | success | error (default: info).
 */
export default function toast(msg, variant = 'info') {
  const { hide } = cogoToast[variant](msg, {
    heading: variant === 'error' ? 'Erreur !' : variant === 'success' ? "C'est un succès !" : '',
    hideAfter: 10,
    position: 'top-center',
    onClick() {
      hide();
    },
  });
}
