import { useField } from 'formik';

export default function CustomField({ label, isTextarea, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className={`field flex column${meta.error ? ' error' : ''}`}>
      <label htmlFor={props.name}>{label}</label>

      {!isTextarea && <input id={props.name} {...field} {...props} />}
      {isTextarea && <textarea id={props.name} {...field} {...props} />}
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}

      <style jsx>{`
        .field {
          gap: 0.5em;
        }
        .error div {
          color: var(--error);
        }
      `}</style>
    </div>
  );
}
