import Layout from '../components/layout';
import getSiteData from '../lib/siteData';
import styles from '../styles/Home.module.css';

export default function Home({ siteData }) {
  return (
    <Layout siteData={siteData}>
      <h1>Hey!</h1>
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
