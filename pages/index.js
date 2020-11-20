import Layout from '../components/layout';
import Hero from '../components/home/hero';
import About from '../components/home/about';
import Services from '../components/home/services';
import Cta from '../components/home/Cta';
import getSiteData from '../lib/siteData';

export default function HomePage({ siteData }) {
  const data = siteData.data.home;
  return (
    <Layout siteData={siteData} title="Progressez en Mathématiques">
      <Hero data={data.hero} />
      <About data={data.about} />
      <Services data={data.services} />
      <Cta action1={data.hero.action1} action2={data.hero.action2} />
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
