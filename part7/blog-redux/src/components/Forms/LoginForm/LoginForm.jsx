import useField from "../../../hooks/useField";

const LoginForm = () => {
  const userName = useField("text");
  const password = useField("password");

  const filterAttributes = ({ clearField, ...rest }) => rest;

  const resetLoginForm = () => {
    userName.clearField();
    password.clearField();
  };

  return (
    <>
      <form action="">
        <input {...filterAttributes(userName)} />
        <input {...filterAttributes(password)} />
        <button type="submit"></button>
        <button type="reset" onClick={resetLoginForm}></button>
      </form>
    </>
  );
};

export default LoginForm;
