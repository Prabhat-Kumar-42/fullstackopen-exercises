import PropTypes from "prop-types";

const Header = ({ heading, type }) => {
  const HeadingType = `h${type}`;
  return <HeadingType>{heading}</HeadingType>;
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
};

export default Header;
