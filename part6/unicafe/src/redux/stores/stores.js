import { createStore } from "redux";
import counterReducer from "../reducers/counterReducer";

const counterStore = createStore(counterReducer);

export { counterStore };
