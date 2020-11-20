import PropTypes from 'prop-types';

export default function Page({ children, title }) {
  return (
    <div className="page container">
      <h1 className="center">{title}</h1>
      <section className="center">{children}</section>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};