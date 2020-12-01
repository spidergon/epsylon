// import Link from 'next/link';
import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function ServicesPage({ siteData }) {
  return (
    <Layout
      siteData={siteData}
      title="Nos services : cours particuliers en ligne et correction de vos devoirs en Guyane"
    >
      <Page title="Nos services">
        {/* <div className="center" style={{ maxWidth: '40em', margin: '0 auto' }}>
          <p>{siteData.data.devoirs.text}</p>
          <Link href={siteData.data.devoirs.action.link}>
            <a className="btn mt2">{siteData.data.devoirs.action.label}</a>
          </Link>
        </div> */}
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
