import { createStore, compose, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { loggerMiddleware } from "./middleware/logger";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./root-reducer";

import { rootSaga } from "./root-saga";
/*
const curryFuc = (a) => (b,c) => {
    a + b - c
}

const withA = curryFuc(3);

withA(2,3) // 3+2-4 = 1
*/
export type RootState = ReturnType<typeof rootReducer>; //because rootReducer live in the world of JS not TS
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig : ExtendedPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// root-reducer
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware)); // if it's was production logger should not log this

//make redux devtool on chrome work
const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
