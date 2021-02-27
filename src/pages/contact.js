import Contact from '@components/contact';
import Layout from '@components/layout';
import Page from '@components/page';
import getSiteData from '@utils/siteData';

export default function ContactPage({ siteData }) {
  return (
    <Layout
      siteData={siteData}
      title="Contact : cours particuliers en ligne et correction de vos devoirs en Guyane"
    >
      <Page title="Contactez-nous">
        <Contact data={siteData.data.contact} />
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
