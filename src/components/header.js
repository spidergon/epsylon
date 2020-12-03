import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from '@styles/header.module.css';

export default function Header({ menuItems, title }) {
  const { pathname } = useRouter();

  return (
    <header>
      <div className={`${styles.wrapper} container flex`}>
        <Link href="/">
          <a className={styles.siteTitle}>{title}</a>
        </Link>

        <nav className={styles.nav}>
          <ul className="flex">
            {menuItems.map(({ link, label }, index) => (
              <li key={index}>
                <Link href={link}>
                  <a className={pathname.match(link) ? styles.active : ''}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
};
