import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';
import ContactForm from '../components/contact';

export default function ContactPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Contact : cours particuliers en ligne et correction de vos devoirs en Guyane">
      <Page title="Contactez-nous">
        <ContactForm />
      </Page>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteData = getSiteData();
  return {
    props: { siteData },
  };
}
