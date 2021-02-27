import Layout from '@components/layout';
import Page from '@components/page';
import getSiteData from '@utils/siteData';
import Link from 'next/link';

export default function Custom404({ siteData }) {
  return (
    <Layout siteData={siteData} title="404 - Page introuvable">
      <Page title="Oups ! Page introuvable">
        <div className="center">
          <svg
            height="72"
            style={{ fill: 'var(--main-color)' }}
            viewBox="0 0 24 24"
            width="72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z" />
            <path d="M11 7H13V14H11zM11 15H13V17H11z" />
          </svg>
          <p className="mt2">La page demandée est introuvable.</p>
          <Link href="/">
            <a className="custom mt2" style={{ display: 'inline-block' }}>
              ⬅ Retourner à la page d&rsquo;accueil
            </a>
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
