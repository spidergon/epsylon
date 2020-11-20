import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Actions from './actions';

export default function Hero({ data }) {
  return (
    <section className="hero container flex column">
      <div className="tagline center">
        <h1>
          Progresser en
          <br />
          <span>Mathématiques</span>
        </h1>
        <p>{data.subTitle}</p>
        <div className="wrapper">
          <Actions reset action1={data.action1} action2={data.action2} />
        </div>
      </div>
      <div className="imgWrap">
        <Image alt={data.alt} layout="fill" objectFit="cover" src={data.img} />
      </div>

      {/* Style */}
      <style jsx>{`
        .tagline {
          margin: 2em 0;
          align-self: center;
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
        .wrapper {
          margin-top: 2em;
          justify-content: center;
        }

        @media (min-width: 481px) {
          .hero h1 {
            font-size: 3rem;
          }
          .hero p {
            font-size: 1.25rem;
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
          .wrapper {
            justify-content: inherit;
          }
        }
      `}</style>
    </section>
  );
}

Hero.propTypes = {
  data: PropTypes.shape({
    action1: PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
    action2: PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
    alt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }).isRequired,
};
