import Link from 'next/link';
import Layout from '../components/layout';
import Page from '../components/page';
import getSiteData from '../lib/siteData';

export default function CoursPage({ siteData }) {
  return (
    <Layout siteData={siteData} title="Cours particuliers en ligne">
      <Page title="Cours particuliers en ligne">
        <div className="center" style={{ maxWidth: '40em', margin: '0 auto' }}>
          <p>{siteData.data.cours.text}</p>
          <Link href={siteData.data.cours.action.link}>
            <a className="btn mt2">{siteData.data.cours.action.label}</a>
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
