import { Formik, Form, Field, ErrorMessage } from 'formik';
import Layout from '../components/layout';
import Page from '../components/page';
import CustomField from '../components/customField';
import getSiteData from '../lib/siteData';
import toast from '../lib/toast';

const handleValidate = (values) => {
  const errors = {};
  if (values.visu) errors.visu = true; // honeypot detected -> error
  if (!values.name) errors.name = 'Ce champ est requis';
  if (!values.email) errors.email = 'Ce champ est requis';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Adresse e-mail invalide';
  }
  if (!values.message) errors.message = 'Ce champ est requis';
  if (!values.consent) errors.consent = 'Veuillez cocher cette case';
  return errors;
};

const errMsg = 'Erreur ! Veuillez réessayer ultérieurement.';

const handleSubmit = (values, { setSubmitting }) => {
  fetch(`/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then(({ status, message }) => {
      if (status >= 400 && status < 600) {
        console.error(message);
        toast(errMsg, 'error');
      } else {
        // It worked!
        // TODO: reset form
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

export default function ContactPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Contactez-nous">
      <Page title="Contactez-nous">
        <p className="center">Vous pouvez nous contacter via le formulaire ci-dessous :</p>
        <Formik
          initialValues={{ name: '', email: '', message: '', consent: '', visu: '' }}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex column">
              <CustomField required autoComplete="off" label="Nom :" name="name" type="text" />
              <CustomField required label="E-mail :" name="email" type="email" />
              <CustomField isTextarea required label="Message :" name="message" rows="5" />

              {/* Consent */}
              <div>
                <label className="flex" htmlFor="consent">
                  <Field required id="consent" name="consent" type="checkbox" />
                  <p>
                    J’autorise Epsylon à conserver mes données personnelles transmises via ce formulaire. Aucune
                    exploitation commerciale ne sera faite de ces données. Voir notre{' '}
                    <a className="custom" href="/mentions-legales/#privacy" target="_blank">
                      politique des données personnelles
                    </a>
                    .
                  </p>
                </label>
                <ErrorMessage className="msg error" component="div" name="consent" />
              </div>

              {/* Honey pot */}
              <Field autoComplete="off" className="visu" name="visu" type="text" />

              <button className="btn" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Chargment...' : 'Envoyer'}
              </button>
            </Form>
          )}
        </Formik>

        <style global jsx>{`
          form {
            max-width: 35em;
            margin: 2em auto;
            gap: 1em;
          }
          .msg.error {
            color: var(--error);
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
          textarea {
            height: inherit;
            padding: 0.5em;
          }
          input[type='text']:focus,
          input[type='email']:focus,
          input[type='checkbox']:focus,
          textarea:focus {
            box-shadow: 0 0 3px 1px var(--primary);
          }
          label.flex {
            gap: 0.5em;
            align-items: center;
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
          .btn {
            margin-top: 0.5em;
          }
        `}</style>
      </Page>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteData = getSiteData();
  return {
    props: {
      siteData,
    },
  };
}
