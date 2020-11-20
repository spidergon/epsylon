import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Hero({ data }) {
  return (
    <>
      <section className="hero container flex column">
        <div className="tagline center">
          <h1>
            Progresser en
            <br />
            <span>Mathématiques</span>
          </h1>
          <p>{data.hero.subTitle}</p>
          <a className="btn" href={data.hero.action1.link}>
            {data.hero.action1.label}
          </a>
          <a className="btn light" href={data.hero.action2.link}>
            {data.hero.action2.label}
          </a>
        </div>
        <div className="imgWrap">
          <Image alt={data.hero.alt} layout="fill" objectFit="cover" src={data.hero.img} />
        </div>
      </section>

      {/* Style */}
      <style jsx>{`
        .tagline {
          margin: 2em 0;
          align-self: center;
        }
        .tagline .btn {
          margin-top: 1.5em;
          width: 100%;
        }
        .hero h1 {
          font-size: 2rem;
          line-height: 1.2;
          letter-spacing: -0.025em;
          color: var(--black);
        }
        .hero h1 span {
          color: var(--primary);
        }
        .hero p {
          margin-top: 1.5em;
          font-size: 1rem;
          font-weight: 500;
        }
        .imgWrap {
          position: relative;
          height: 250px;
          width: 100%;
        }

        @media (min-width: 481px) {
          .hero h1 {
            font-size: 3rem;
          }
          .hero p {
            font-size: 1.25rem;
          }
          .tagline .btn {
            width: auto;
          }
          .tagline .btn:not(:first-of-type) {
            margin-left: 1em;
          }
          .imgWrap {
            height: 300px;
          }
        }

        @media (min-width: 768px) {
          .hero h1 {
            font-size: 4rem;
          }
          .tagline {
            margin-top: 4em;
            max-width: 36rem;
          }
        }

        @media (min-width: 1025px) {
          .hero {
            flex-direction: row !important;
            justify-content: space-between;
          }
          .tagline {
            margin-top: 5em;
            margin-right: 4em;
            text-align: inherit;
            align-self: inherit;
          }
          .imgWrap {
            height: 500px;
          }
        }
      `}</style>
    </>
  );
}
