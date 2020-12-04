import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

export default function Fieldset({ name, label, ...rest }) {
  return (
    <div className="flex column" style={{ gap: '0.5em' }}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage component="span" name={name} style={{ color: 'var(--error)' }} />
    </div>
  );
}

Fieldset.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
