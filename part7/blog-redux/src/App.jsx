import AppRoutes from "./routes/AppRoutes";
import usePresistedUser from "./hooks/usePresistedUser";

function App() {
  usePresistedUser();
  return (
    <div>
      <AppRoutes />
    </div>
  );
}
export default App;
