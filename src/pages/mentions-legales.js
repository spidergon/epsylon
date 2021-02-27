import Layout from '@components/layout';
import Page from '@components/page';
import getSiteData from '@utils/siteData';

export default function LegalPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Mentions Légales">
      <Page title="Mentions Légales">Content here</Page>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteData = getSiteData();

  return {
    props: { siteData },
  };
}
