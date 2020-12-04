import { Field, ErrorMessage } from 'formik';

export default function Consent() {
  return (
    <div>
      <label className="flex" style={{ alignItems: 'center', gap: '0.5em' }}>
        <Field name="consent" type="checkbox" />
        <p>
          J’autorise Epsylon à conserver mes données personnelles transmises via ce formulaire. Aucune exploitation
          commerciale ne sera faite de ces données. Voir notre{' '}
          <a className="custom" href="/mentions-legales/#privacy" target="_blank">
            politique des données personnelles
          </a>
          .
        </p>
      </label>
      <ErrorMessage component="span" name="consent" style={{ color: 'var(--error)' }} />
    </div>
  );
}
