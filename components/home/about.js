import Image from 'next/image';
import PropTypes from 'prop-types';

export default function About({ data }) {
  return (
    <section className="about space">
      <div className="container flex column">
        <div className="text">
          <h2 className="center">{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.text }} />
        </div>
        <div className="imgWrap">
          <Image alt={data.alt} layout="fill" objectFit="cover" src={data.img} />
        </div>
      </div>

      {/* Style */}
      <style jsx>{`
        .container {
          align-items: center;
        }
        h2 {
          margin-bottom: 0.5em;
        }
        .imgWrap {
          position: relative;
          margin-top: 2em;
          width: 100%;
          height: 250px;
        }

        @media (min-width: 481px) {
          .text {
            max-width: 35em;
          }
          .imgWrap {
            height: 300px;
          }
        }

        @media (min-width: 768px) {
          h2 {
            margin-bottom: 1em;
          }
        }

        @media (min-width: 1025px) {
          .container {
            flex-direction: row;
            justify-content: inherit;
          }
          .text {
            padding: 2em 0 2em 2em;
          }
          h2 {
            text-align: inherit;
          }
          .imgWrap {
            margin-top: 0;
            max-width: 640px;
            height: 500px;
            order: -1; /* image first */
          }
        }

        @media (min-width: 1281px) {
          .text {
            padding-left: 4em;
          }
        }
      `}</style>
    </section>
  );
}

About.propTypes = {
  data: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
