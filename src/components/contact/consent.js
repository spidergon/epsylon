import styles from '@styles/contact.module.css';
import { Field, useField } from 'formik';

export default function Consent() {
  const [field, meta] = useField({ name: 'consent' });

  const isError = meta.touched && meta.error;

  return (
    <div>
      <label className={styles.checkbox}>
        <div className={styles.cbInput}>
          <Field name={field.name} type="checkbox" />
          <span className={`${styles.cbControl} ${isError ? styles.cbError : ''}`}>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </span>
        </div>
        <div>
          <p>
            J’autorise Epsylon à conserver mes données personnelles transmises via ce formulaire.
            Aucune exploitation commerciale ne sera faite de ces données. Voir notre{' '}
            <a className="custom" href="/mentions-legales/#privacy" target="_blank">
              politique des données personnelles
            </a>
            .
          </p>
        </div>
      </label>
      {isError && <span style={{ color: 'var(--error)' }}>{meta.error}</span>}
    </div>
  );
}
