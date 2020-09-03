import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import pReducer from "./root-reducer.js";

const middlewares = [logger];

const store = createStore(pReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
export { store, persistor };
