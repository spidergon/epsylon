import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Actions({ action1, action2, reset }) {
  return (
    <div className={`actions flex column${reset ? ' reset' : ''}`}>
      <Link href={action1.link}>
        <a className="btn">{action1.label}</a>
      </Link>
      <Link href={action2.link}>
        <a className="btn light">{action2.label}</a>
      </Link>

      {/* Style */}
      <style jsx>{`
        .actions {
          gap: 1.5em;
        }

        @media (min-width: 481px) {
          .actions {
            flex-direction: row;
            justify-content: center;
            gap: 1em;
          }
          .reset {
            justify-content: inherit;
          }
        }

        @media (min-width: 768px) {
          .actions {
            gap: 1.5em;
          }
        }
      `}</style>
    </div>
  );
}

Actions.propTypes = {
  action1: PropTypes.shape({
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  action2: PropTypes.shape({
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  reset: PropTypes.bool,
};
