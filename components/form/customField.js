import PropTypes from 'prop-types';
import { useField } from 'formik';

export default function CustomField({ label, isTextarea, ...props }) {
  const [field, meta] = useField(props);

  const isError = meta.touched && meta.error;

  return (
    <div className={`field flex column${isError ? ' error' : ''}`}>
      <label htmlFor={props.name}>{label}</label>

      {!isTextarea && <input id={props.name} {...field} {...props} />}
      {isTextarea && <textarea id={props.name} {...field} {...props} />}
      {isError && <div>{meta.error}</div>}

      <style jsx>{`
        .field {
          gap: 0.5em;
        }
        .error input,
        .error textarea {
          background: rgba(255, 0, 0, 0.1);
        }
        .error div {
          color: var(--error);
        }
      `}</style>
    </div>
  );
}

CustomField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
