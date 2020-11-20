import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function ContactPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Contactez-nous">
      <Page title="Contactez-nous">Contact form here</Page>
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
