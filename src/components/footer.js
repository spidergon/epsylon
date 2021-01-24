import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from '@styles/footer.module.css';

export default function Footer({ menuItems, title, socials }) {
  const { pathname } = useRouter();

  return (
    <footer className={`${styles.footer} space`}>
      <div className="container center">
        <ul className={`${styles.menu} flex`}>
          {menuItems.map(({ link, label }, index) => (
            <li key={index}>
              <Link href={link}>
                <a className={pathname.match(link) ? styles.active : ''}>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`${styles.socials} mt2`}>
          <li>
            <a
              aria-label="twitter"
              href={`https://twitter.com/${socials.twitter}`}
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <i className="bx bxl-twitter bx-sm" />
            </a>
          </li>
          <li>
            <a
              aria-label="facebook"
              href={`https://www.facebook.com/${socials.fb}`}
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <i className="bx bxl-facebook bx-sm" />
            </a>
          </li>
          <li>
            <a aria-label="email" href={`mailto:${socials.email}`}>
              <i className="bx bx-envelope bx-sm" />
            </a>
          </li>
        </ul>
        <p className="mt2">
          &copy;&nbsp;
          <Link href="/">
            <a>{title}</a>
          </Link>
          &nbsp;{' | '}&nbsp;
          <Link href="/mentions-legales">
            <a className={pathname.match('mentions-legales') ? styles.active : ''}>
              Mentions légales
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  socials: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    fb: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
