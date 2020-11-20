import Head from 'next/head';
import Header from './header';
import Footer from './footer';
// import '../styles/layout.module.css';
// import utilStyles from '../styles/utils.module.css';

export default function Layout({ children, siteData }) {
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />

        {/* <link crossOrigin href="https://fonts.googleapis.com" rel="preconnect" /> */}
        {/* <link crossOrigin href="https://unpkg.com" rel="preconnect" /> */}

        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&amp;display=swap" rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          media="print"
          rel="stylesheet"
          onLoad="this.media='all';this.onload=null;"
        />
      </Head>
      <Header menuItems={siteData.headerMenu} title={siteData.title} />
      <main>{children}</main>
      <Footer menuItems={siteData.headerMenu} socials={siteData.socials} title={siteData.title} />
    </>
  );
}
