import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function CorrectionsPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Correction de vos devoirs">
      <Page title="Correction de vos devoirs">Content here</Page>
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
