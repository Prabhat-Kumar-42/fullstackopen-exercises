import useUser from "../hooks/useUser";

const Home = () => {
  const { user } = useUser();
  return (
    <div>
      <span>{user.name} is logged in !! </span>
    </div>
  );
};

export default Home;
