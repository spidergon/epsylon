import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import Fieldset from './fieldset';
import Consent from './consent';
import toast from '@utils/toast';

const errMsg = 'Erreur ! Veuillez réessayer ultérieurement.';

const subjects = [
  { value: 'cours', label: 'Cours particulier en ligne' },
  { value: 'corrections', label: 'Commande de correction' },
  { value: 'informatique', label: "Initiation à l'informatique" },
  { value: 'autre', label: 'Autre' },
];

export default function ContactForm() {
  const [subject, setSubject] = useState('');

  const {
    query: { s },
  } = useRouter();

  useEffect(() => {
    setSubject(s || 'cours');
  }, [s]);

  const handleValidate = (values) => {
    const errors = {};
    if (!values.nomodktl) errors.nomodktl = 'Ce champ est requis';
    if (!values.mailhgnxo) errors.mailhgnxo = 'Ce champ est requis';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mailhgnxo)) {
      errors.mailhgnxo = 'Adresse e-mail invalide';
    }
    if (!values.message) errors.message = 'Ce champ est requis';
    if (!values.consent) errors.consent = 'Veuillez cocher cette case si vous désirez poursuivre';
    return errors;
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const body = JSON.stringify({ subject, ...values });

    fetch(`/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    })
      .then((res) => res.json())
      .then(({ status, message }) => {
        if (status >= 400 && status < 600) {
          console.error(message);
          toast(errMsg, 'error');
        } else {
          // It worked!
          resetForm();
          toast('Merci ! Votre message a été envoyé avec succès.', 'success');
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
      <div className="tagline center">
        {!s && <p>Vous souhaitez réserver un cours particulier en ligne ou commander une correction&nbsp;?</p>}
        {s === 'cours' && <p>Vous souhaitez réserver votre cours particulier en ligne&nbsp;?</p>}
        {s === 'corrections' && <p>Confiez-nous la correction de vos devoirs</p>}
        <p>Veuillez nous contacter via le formulaire ci-dessous&nbsp;:</p>
      </div>

      <Formik
        initialValues={{
          nomodktl: '',
          mailhgnxo: '',
          message: '',
          consent: '',
          name: '', // honeypot
          email: '', // honeypot
        }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex column">
            <Fieldset autoComplete="off" label="Nom :" name="nomodktl" type="text" />

            <Fieldset label="E-mail :" name="mailhgnxo" type="text" />

            <Fieldset
              as="select"
              label="Sujet :"
              name="subject"
              value={subject}
              onChange={({ target }) => setSubject(target.value)}
            >
              {subjects.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Fieldset>

            <Fieldset as="textarea" label="Message :" name="message" rows="5" />

            <Consent />

            {/* Honeypot */}
            <label className="visu" htmlFor="name" />
            <input
              autoComplete="off"
              className="visu"
              id="name"
              name="name"
              placeholder="Your name here"
              tabIndex="-1"
              type="text"
            />
            <label className="visu" htmlFor="email" />
            <input
              autoComplete="off"
              className="visu"
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

      <style global jsx>{`
        .tagline p {
          font-size: 1rem;
          margin-bottom: 0.5em;
        }

        form {
          max-width: 35em;
          margin: 3em auto;
          gap: 1.5em;
        }

        input[type='text'],
        input[type='email'],
        textarea {
          /* requis pour composer de manière appropriée les éléments
            de formulaire sur les navigateurs fondés sur WebKit */
          -webkit-appearance: none;

          border: 1px solid #333;
          border-radius: 5px;
          font-family: inherit;
          height: 3em;
          background: transparent;
          color: var(--black);
          padding: 0 0.5em;
        }

        select {
          height: 3em;
        }

        textarea {
          height: inherit;
          padding: 0.5em;
        }

        input[type='text']:focus,
        input[type='email']:focus,
        input[type='checkbox']:focus,
        select:focus,
        textarea:focus {
          box-shadow: 0 0 3px 1px var(--primary);
        }

        .btn {
          margin-top: 0.5em;
        }

        .error {
          color: var(--error);
        }

        .visu {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          height: 0;
          width: 0;
          z-index: -1;
        }

        @media (min-width: 768px) {
          .tagline p {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
