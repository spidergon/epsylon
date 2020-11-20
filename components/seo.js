import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export const siteTitle = 'Epsylon Guyane';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        content="Cours particulier de Mathématiques, aide aux devoirs, correction des devoirs et initiation à l'outils informatique."
        name="description"
      />
      <meta
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        property="og:image"
      />
      <meta content={siteTitle} name="og:title" />
      <meta content="summary_large_image" name="twitter:card" />

      {/* <link href="https://epsylon.vercel.app" rel="canonical" />
      <meta content="{{ site.description }}" name="description" />
      <meta content="summary" name="twitter:card" />
      <meta content="@{{ site.socials.twitter }}" name="twitter:site" />
      <meta content="/" property="og:url" />
      <meta content="Progressez en Mathématiques" property="og:title" />
      <meta content="{{ site.description }}" property="og:description" /> */}
    </Head>
  );
}
