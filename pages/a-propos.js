import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function AboutPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="À Propos">
      <Page title="À Propos">Content here</Page>
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
