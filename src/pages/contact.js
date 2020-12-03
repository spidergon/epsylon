import Layout from '@components/layout';
import Page from '@components/page';
import ContactForm from '@components/contact';
import getSiteData from '@utils/siteData';

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
