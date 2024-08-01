import ReactDOM from "react-dom/client";

import App from "./App";
import { counterStore } from "./redux/stores/stores";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => root.render(<App />);

renderApp();

counterStore.subscribe(renderApp);
