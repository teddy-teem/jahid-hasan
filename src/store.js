/**
 * Created by paulius on 30/08/17.
 * Main store function
 */
 import { createStore, applyMiddleware, compose } from "redux";
 import { persistStore, persistReducer } from "redux-persist";
 import thunk from "redux-thunk";
 import { createLogger } from "redux-logger";
 import rootReducer from "./reducers";
 import { environment } from "./configs/config";
 import storage from "localforage";
 import createExpirationTransform from "redux-persist-transform-expire";
 
 const expireTransform = createExpirationTransform({
   expireKey: "expiresAt"
 });
 
 const persistConfig = {
   key: "root",
   storage: storage,
   whitelist: [
     "loginReducer",
     "onboardingReducer",
     "userDetailsReducer",
     "mfaResetReducer",
     "membershipReducer",
     "topUpConfigReducer"
   ],
   transforms: [expireTransform]
 };
 
 const persistedReducer = persistReducer(persistConfig, rootReducer);
 
 // export default () => {
 const env = environment.indexOf("#") > -1 ? "dev" : environment;
 
 const logger = createLogger();
 
 // Middleware and store enhancers
 const enhancers = [applyMiddleware(thunk)];
 
 // Enable logger only when rendering on client and during development.
 if (env === "dev") {
   enhancers.push(applyMiddleware(logger));
 }
 
 let store = createStore(persistedReducer, undefined, compose(...enhancers));
 
 let persistor = persistStore(store);
 
 //   return { store, persistor };
 // };
 
 export { store, persistor };
 