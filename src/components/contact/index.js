import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import Fieldset from './fieldset';
import Consent from './consent';
import toast from '@utils/toast';
import styles from '@styles/contact.module.css';

const errMsg = 'Erreur ! Veuillez réessayer ultérieurement.';

export default function Contact({ data }) {
  const [sentValues, setSentValues] = useState(null);
  const [subject, setSubject] = useState('');

  const {
    query: { s },
  } = useRouter();

  useEffect(() => {
    setSubject(s || 'cours');
  }, [s]);

  const handleValidate = (values) => {
    const errors = {};
    if (!values.mailhgnxo) errors.mailhgnxo = 'Ce champ est requis';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mailhgnxo)) {
      errors.mailhgnxo = 'Adresse e-mail invalide';
    }
    if (!values.message) errors.message = 'Ce champ est requis';
    if (!values.consent) errors.consent = 'Veuillez cocher cette case si vous désirez poursuivre';
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    fetch(`/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, ...values }),
    })
      .then((res) => res.json())
      .then(({ status, message, fields }) => {
        if (status >= 400 && status < 600) {
          console.error(message);
          toast(errMsg, 'error');
        } else {
          // It worked!
          setSentValues(fields);
        }
      })
      .catch((err) => {
        console.error(err);
        toast(errMsg, 'error');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      {!sentValues && (
        <>
          <div className={`${styles.tagline} center`}>
            {!s && (
              <p>
                Vous souhaitez réserver un cours particulier en ligne ou commander une
                correction&nbsp;?
              </p>
            )}
            {s === 'cours' && (
              <p>Vous souhaitez réserver votre cours particulier en ligne&nbsp;?</p>
            )}
            {s === 'corrections' && <p>Confiez-nous la correction de vos devoirs</p>}
            <p>Veuillez nous contacter via le formulaire ci-dessous&nbsp;:</p>
          </div>

          <Formik
            initialValues={{
              nomodktl: '',
              mailhgnxo: '',
              message: '',
              consent: false,
              name: '', // honeypot
              email: '', // honeypot
            }}
            validate={handleValidate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={`${styles.form} flex column`}>
                <Fieldset autoComplete="off" label="Nom :" name="nomodktl" type="text" />

                <Fieldset label="E-mail :" name="mailhgnxo" type="text" />

                <Fieldset
                  as="select"
                  label="Sujet :"
                  name="subject"
                  value={subject}
                  onChange={({ target }) => setSubject(target.value)}
                >
                  {data.subjects.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Fieldset>

                <Fieldset as="textarea" label="Message :" name="message" rows="5" />

                <Consent />

                {/* Honeypot */}
                <label className={styles.visu} htmlFor="name" />
                <input
                  autoComplete="off"
                  className={styles.visu}
                  id="name"
                  name="name"
                  placeholder="Your name here"
                  tabIndex="-1"
                  type="text"
                />
                <label className={styles.visu} htmlFor="email" />
                <input
                  autoComplete="off"
                  className={styles.visu}
                  id="email"
                  name="email"
                  placeholder="Your e-mail here"
                  tabIndex="-1"
                  type="email"
                />
                {/* end honeypot */}

                <button className="btn" disabled={isSubmitting} type="submit">
                  {isSubmitting ? 'Chargment...' : 'Envoyer'}
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
      {sentValues && (
        <div className={`flex column ${styles.msgSent}`}>
          <h2>Votre message a été envoyé avec succès !</h2>
          {sentValues.Name && (
            <>
              <p>
                <strong>Nom :</strong>
              </p>
              <p className={styles.msg}>{sentValues.Name}</p>
            </>
          )}
          <p>
            <strong>E-mail :</strong>
          </p>
          <p className={styles.msg}>{sentValues.Email}</p>
          <p>
            <strong>Sujet :</strong>
          </p>
          <p className={styles.msg}>{sentValues.Subject}</p>
          <p>
            <strong>Message :</strong>
          </p>
          <p
            className={styles.msg}
            dangerouslySetInnerHTML={{
              __html: sentValues.Message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
            }}
          />
          <Link href="/">
            <a className="custom mt2">⬅ Retourner à la page d&rsquo;accueil</a>
          </Link>
        </div>
      )}
    </>
  );
}
