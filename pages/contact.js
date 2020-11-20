import Layout from '../components/layout';
import getSiteData from '../lib/siteData';

export default function ContactPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Contactez-nous">
      <h1>Contact</h1>
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
