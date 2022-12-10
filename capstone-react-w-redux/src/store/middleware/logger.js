export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next();
    }
  
    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());
  
    next(action);
  
    console.log("NewState: ", store.getState());
  };