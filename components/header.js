import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function Header({ menuItems, title }) {
  const { pathname } = useRouter();

  return (
    <header>
      <div className="container flex column">
        <Link href="/">
          <a className="site-title">{title}</a>
        </Link>

        <nav>
          <ul className="flex">
            {menuItems.map(({ link, label }, index) => (
              <li key={index}>
                <Link href={link}>
                  <a className={pathname.match(link) ? 'active' : ''}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .container {
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }

        .site-title {
          font-weight: 500;
          color: #143774;
          font-size: 1.5rem;
          text-decoration: none;
        }

        nav {
          font-weight: 500;
          margin-top: 0.5em;
        }

        nav ul {
          /*grid-template-columns: auto auto;
          justify-items: center;
          grid-column-gap: 1em;*/
          gap: 1em;
        }

        nav a {
          padding: 0.5em;
        }

        .active,
        nav a:hover,
        nav a:focus {
          color: var(--primary);
        }

        @media (min-width: 481px) {
          .site-title {
            font-size: 2rem;
          }
          nav ul {
            display: flex;
            grid-column-gap: unset;
          }
          nav a {
            padding: 0.75em;
          }
        }

        @media (min-width: 768px) {
          .container {
            flex-direction: row;
            justify-content: space-between;
            height: 64px;
          }
          nav li:last-child a {
            padding-right: 0;
          }
        }
      `}</style>
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
