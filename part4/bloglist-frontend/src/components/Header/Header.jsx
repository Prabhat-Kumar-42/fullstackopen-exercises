const Header = ({ heading, type }) => {
  const HeadingType = `h${type}`;
  return <HeadingType>{heading}</HeadingType>;
};

export default Header;
