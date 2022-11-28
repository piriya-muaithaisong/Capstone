import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumetFromAuth,
  signOutUser,
} from "../utils/firebase/firebase.utils";

//as the actual value you want to acess
export const UserContext = createContext({
  currentUser: null,
  setCurrentuser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandle type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

// provider allow childer to access the value on value tag
export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentuser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(state)

  const { currentUser } = state;
  const setCurrentuser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentuser };

  //signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumetFromAuth(user);
      }
      setCurrentuser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


