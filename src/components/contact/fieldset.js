import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import styles from '@styles/contact.module.css';

export default function Fieldset({ name, label, ...rest }) {
  const [field, meta] = useField({ name });

  const isError = meta.touched && meta.error && field.name === name;

  return (
    <div className={`flex column ${isError ? styles.error : ''}`} style={{ gap: '0.5em' }}>
      <div className="flex" style={{ justifyContent: 'space-between' }}>
        <label htmlFor={name} style={{ fontWeight: '500', letterSpacing: '0.1em' }}>
          {label}
        </label>
        {isError && <span style={{ color: 'var(--error)' }}>{meta.error}</span>}
      </div>
      <Field id={name} name={name} {...rest} />
    </div>
  );
}

Fieldset.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
