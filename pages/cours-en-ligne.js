import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function CoursPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Cours particuliers en ligne">
      <Page title="Cours particuliers en ligne">Content here</Page>
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
