import About from '@components/home/about';
import Cayenne from '@components/home/cayenne';
import Cta from '@components/home/cta';
import Hero from '@components/home/hero';
import Services from '@components/home/services';
import Layout from '@components/layout';
import getSiteData from '@utils/siteData';

export default function HomePage({ siteData }) {
  const data = siteData.data.home;

  return (
    <Layout siteData={siteData} title="Progressez en Mathématiques">
      <Hero data={data.hero} />
      <Services data={data.services} />
      <About data={data.about} />
      <Cta action1={data.hero.action1} action2={data.hero.action2} />
      <Cayenne data={data.cayenne} />
    </Layout>
  );
}

export async function getStaticProps() {
  const siteData = getSiteData();

  return {
    props: { siteData },
  };
}
