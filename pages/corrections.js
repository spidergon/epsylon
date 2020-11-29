import Link from 'next/link';
import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function CorrectionsPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Correction de vos devoirs">
      <Page title="Correction de vos devoirs">
        <div className="center" style={{ maxWidth: '40em', margin: '0 auto' }}>
          <p>{siteData.data.devoirs.text}</p>
          <Link href={siteData.data.devoirs.action.link}>
            <a className="btn mt2">{siteData.data.devoirs.action.label}</a>
          </Link>
        </div>
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
