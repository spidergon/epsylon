import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, siteData, title }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />

        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&amp;display=swap" rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          media="print"
          rel="stylesheet"
          onLoad="this.media='all';this.onload=null;"
        />

        <title>
          {title} | {siteData.title}
        </title>

        {/* <link rel="canonical" href="https://epsylon.vercel.app">  */}

        <meta content={siteData.description} name="description" />

        {/* Open Graph */}
        <meta content={title} property="og:title" />
        <meta content={siteData.title} property="og:site_name" />
        <meta content={siteData.description} property="og:description" />
        <meta content={pathname} property="og:url" />
        <meta content="/logo.svg" property="og:image" />

        {/* Twitter */}
        <meta content={`@${siteData.socials.twitter}`} name="twitter:site" />
        <meta content="summary" name="twitter:card" />
      </Head>

      <Header menuItems={siteData.headerMenu} title={siteData.title} />

      <main>{children}</main>

      <Footer menuItems={siteData.headerMenu} socials={siteData.socials} title={siteData.title} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteData: PropTypes.shape({
    description: PropTypes.string.isRequired,
    headerMenu: PropTypes.array.isRequired,
    socials: PropTypes.shape({
      twitter: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};
