import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Cayenne({ data }) {
  return (
    <section className="space">
      <div className="container">
        <div className="imgWrap">
          <Image alt={data.alt} layout="fill" objectFit="cover" src={data.img} />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1025px) {
          .imgWrap {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}

Cayenne.propTypes = {
  data: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
