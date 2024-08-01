import counterReducer from "../../src/redux/reducers/counterReducer";
import deepFreeze from "deep-freeze";

const getInitialState = () => ({
  good: 0,
  bad: 0,
  ok: 0,
});

describe("unicafe reducer", () => {
  test("test should return a proper initial state if called with undefined state", () => {
    const action = {
      type: "unrelated",
    };

    const initialState = getInitialState();
    const returnedState = counterReducer(undefined, action);
    assert.deepStrictEqual(returnedState, initialState);
  });

  test("good is incremented", () => {
    const initialState = getInitialState();
    const action = {
      type: "GOOD",
    };

    deepFreeze(initialState);
    const expectedReturnedState = getInitialState();
    expectedReturnedState.good++;

    const returnedState = counterReducer(initialState, action);
    assert.deepStrictEqual(returnedState, expectedReturnedState);
  });

  test("bad is incremented", () => {
    const initialState = getInitialState();
    const action = {
      type: "BAD",
    };

    deepFreeze(initialState);
    const expectedReturnedState = getInitialState();
    expectedReturnedState.bad++;
    const returnedState = counterReducer(initialState, action);
    assert.deepStrictEqual(returnedState, expectedReturnedState);
  });

  test("ok is incremented", () => {
    const initialState = getInitialState();
    const action = {
      type: "OK",
    };

    deepFreeze(initialState);
    const expectedReturnedState = getInitialState();
    expectedReturnedState.ok++;
    const returnedState = counterReducer(initialState, action);
    assert.deepStrictEqual(returnedState, expectedReturnedState);
  });
});
