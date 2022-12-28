import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ticketsReducer from "./tickets/reducers";

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    tickets: ticketsReducer,
  });

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

  return { store };
};

export default configureStore;
