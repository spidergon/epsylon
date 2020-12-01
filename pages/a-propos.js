import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function AboutPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="À propos : cours particuliers en ligne et correction de vos devoirs en Guyane">
      <Page title="À propos de nous">
        <p>content here</p>
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
