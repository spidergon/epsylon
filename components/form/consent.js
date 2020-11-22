import { useField } from 'formik';

export default function Consent() {
  const [field, meta] = useField('consent');

  const isError = meta.touched && meta.error;

  return (
    <div className={isError ? 'error' : ''}>
      <label className="flex" htmlFor="consent">
        <input className="pointer" id="consent" type="checkbox" {...field} />
        <p>
          J’autorise Epsylon à conserver mes données personnelles transmises via ce formulaire. Aucune exploitation
          commerciale ne sera faite de ces données. Voir notre{' '}
          <a className="custom" href="/mentions-legales/#privacy" target="_blank">
            politique des données personnelles
          </a>
          .
        </p>
      </label>
      {isError && <div>{meta.error}</div>}

      <style jsx>{`
        label {
          gap: 0.5em;
          align-items: center;
        }
        .error input {
          box-shadow: 0 0 3px 1px red;
        }
        .error div {
          color: var(--error);
        }
      `}</style>
    </div>
  );
}
