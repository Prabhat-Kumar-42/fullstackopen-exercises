import useField from "../../../hooks/useField";

const SignUpForm = () => {
  const name = useField("text");
  const userName = useField("text");
  const password = useField("password");

  const filterAttributes = ({ clearField, ...rest }) => rest;

  const resetSignUpForm = () => {
    userName.clearField();
    name.clearField();
    password.clearField();
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form action="">
        <input {...filterAttributes(name)} />
        <input {...filterAttributes(userName)} />
        <input {...filterAttributes(password)} />
        <button type="submit"></button>
        <button type="reset" onClick={resetSignUpForm}></button>
      </form>
    </>
  );
};

export default SignUpForm;
