import Layout from '../components/layout';
import Hero from '../components/home/hero';
import getSiteData from '../lib/siteData';

export default function Home({ siteData }) {
  const data = siteData.data.home;
  return (
    <Layout siteData={siteData} title="Progressez en Mathématiques">
      <Hero data={data} />
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
