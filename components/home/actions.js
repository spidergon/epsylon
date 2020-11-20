import React from 'react';
import PropTypes from 'prop-types';

export default function Actions({ action1, action2, reset }) {
  return (
    <div className={`actions flex column${reset ? ' reset' : ''}`}>
      <a className="btn" href={action1.link}>
        {action1.label}
      </a>
      <a className="btn light" href={action2.link}>
        {action2.label}
      </a>

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
