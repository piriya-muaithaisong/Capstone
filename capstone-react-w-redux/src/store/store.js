import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { loggerMiddleware } from "./middleware/logger";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

/*
const curryFuc = (a) => (b,c) => {
    a + b - c
}

const withA = curryFuc(3);

withA(2,3) // 3+2-4 = 1
*/

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// root-reducer
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
); // if it's was production logger should not log this

//make redux devtool on chrome work
const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
