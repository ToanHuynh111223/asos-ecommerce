import "./GlobalStyles.module.scss";
import PropTypes from "prop-types";
const GlobalStyles = ({ children }: any) => {
  return children;
};
GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalStyles;
