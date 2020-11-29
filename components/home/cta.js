import PropTypes from 'prop-types';
import Actions from './actions';

export default function Cta({ action1, action2 }) {
  return (
    <section className="cta space center">
      <div className="container flex column">
        <h2>
          Prêt à dompter les
          <br />
          <span>Mathématiques ?</span>
        </h2>
        <div className="wrapper">
          <Actions action1={action1} action2={action2} />
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding: 2em 0;
        }
        h2 {
          letter-spacing: -0.025em;
        }
        h2 span {
          color: var(--primary);
        }
        .wrapper {
          margin-top: 2em;
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 3rem;
          }
        }

        @media (min-width: 1025px) {
          .container {
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
          }
          .wrapper {
            margin-top: inherit;
          }
        }
      `}</style>
    </section>
  );
}

Cta.propTypes = {
  action1: PropTypes.object.isRequired,
  action2: PropTypes.object.isRequired,
};
