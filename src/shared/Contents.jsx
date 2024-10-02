import PropTypes from "prop-types";
import Header from "./Header";

const Contents = ({ children, title }) => {
  return (
    <main className="main-section-wrapper">
      <Header title={title} />
      {children}
    </main>
  );
};

Contents.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Contents;
