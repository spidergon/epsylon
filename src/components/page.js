import PropTypes from 'prop-types';
import styles from '@styles/page.module.css';

export default function Page({ children, title }) {
  return (
    <div className={`${styles.page} container`}>
      <h1 className="center">{title}</h1>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
