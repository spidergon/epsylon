import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

export default function Header({ menuItems, title }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container flex">
        <a className="site-title" href="/">
          {title}
        </a>

        {/* Desktop Menu */}

        <nav hidden>
          <ul className="flex">
            {menuItems.map(({ link, label }, index) => (
              <li key={index}>
                <a href={link}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}

        <button
          aria-label={menuOpen ? 'Fermer' : 'Ouvrir'}
          className="nav-btn flex pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'} bx-md`} />
        </button>

        {menuOpen && (
          <nav className="nav-mobile">
            <ul className="flex center">
              {menuItems.map(({ link, label }, index) => (
                <li key={index}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* No Script */}
      <noscript>
        <p>
          <em>Javascript est désactivé !</em>
        </p>
        {menuItems.map(({ link, label }, index) => (
          <Fragment key={index}>
            <a href={link}>{label}</a>
            {index !== menuItems.length - 1 && '  |  '}
          </Fragment>
        ))}
      </noscript>

      {/* Style */}
      <style jsx>{`
        .container {
          height: 64px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }

        .site-title {
          font-weight: 500;
          color: #143774;
          font-size: 1.5rem;
          text-decoration: none;
        }

        .nav-btn {
          border: 0;
        }

        .site-title,
        .nav-btn {
          z-index: 1;
        }

        nav {
          font-weight: 500;
        }

        nav a:hover,
        nav a:focus {
          color: var(--primary);
        }

        .nav-mobile {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          flex-direction: column;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          margin: 0.5em;
        }

        .nav-mobile ul {
          flex-direction: column;
          padding: 1em;
          border-top: 1px solid var(--border-color);
          margin: 55px 5px 0;
          background: var(--white);
        }

        .nav-mobile a {
          padding: 1em 0;
          display: inline-block;
          width: 100%;
        }

        @media (min-width: 481px) {
          .site-title {
            font-size: 2rem;
          }
        }

        @media (min-width: 768px) {
          nav {
            display: flex !important;
          }
          li:not(:first-child) {
            margin-left: 2em;
          }
          .nav-btn,
          .nav-mobile,
          noscript {
            display: none !important;
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
    }).isRequired,
  ).isRequired,
  title: PropTypes.string.isRequired,
};
