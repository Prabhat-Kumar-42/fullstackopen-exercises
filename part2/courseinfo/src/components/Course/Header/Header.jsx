const Header = ({ text, headingType }) => {
  const HeadingTag = `h${headingType}`;
  return <HeadingTag>{text}</HeadingTag>;
};

export default Header;
