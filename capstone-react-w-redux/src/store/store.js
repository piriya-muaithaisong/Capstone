import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage  from "redux-persist/lib/storage";
//import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

/*
const curryFuc = (a) => (b,c) => {
    a + b - c
}

const withA = curryFuc(3);

withA(2,3) // 3+2-4 = 1
*/

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next();
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("NewState: ", store.getState());
};

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// root-reducer
const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
