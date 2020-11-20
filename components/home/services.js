import PropTypes from 'prop-types';

export default function Services({ data }) {
  return (
    <section className="services space">
      <div className="container">
        <div className="center">
          <p className="head">Services</p>
          <h2>{data.title}</h2>
          <p className="head-txt">{data.subTitle}</p>
        </div>
        <div className="grid mt2">
          {data.items.map((item, index) => (
            <div key={index} className="flex">
              <div className="icon">
                <i className="bx bx-check bx-md" />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.action && (
                  <a className="custom" href={item.action.link}>
                    {item.action.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Style */}
      <style jsx>{`
        .head {
          margin: 0 0 0.5em;
          color: var(--primary);
          font-weight: 500;
          text-transform: uppercase;
        }
        .head-txt {
          max-width: 35em;
          margin: 1em auto;
        }
        .grid {
          gap: 1.5em;
        }
        .icon {
          padding-right: 0.5em;
          color: var(--primary);
        }
        h3 {
          color: var(--black);
        }
        a.custom {
          margin-top: 0.5em;
          display: inline-block;
        }

        @media (min-width: 768px) {
          .grid {
            margin-top: 3em;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}

Services.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        action: PropTypes.shape({
          link: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        }),
      }).isRequired
    ).isRequired,
  }).isRequired,
};
