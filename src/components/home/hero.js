import Image from 'next/image';
import PropTypes from 'prop-types';
import Actions from './actions';
import styles from '@styles/home/hero.module.css';

export default function Hero({ data }) {
  return (
    <section className={`${styles.wrapper} container flex`}>
      <div className={`${styles.tagline} center flex`}>
        <h1>
          Progresser en
          <br />
          <span>Mathématiques</span>
        </h1>
        <p>{data.subTitle}</p>
        <div className={`${styles.actions} `}>
          <Actions reset action1={data.action1} action2={data.action2} />
        </div>
      </div>
      <div className="imgWrap">
        <Image alt={data.alt} layout="fill" objectFit="cover" src={data.img} />
      </div>
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
