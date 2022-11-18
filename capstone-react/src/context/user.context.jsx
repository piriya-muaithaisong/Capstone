import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

//as the actual value you want to acess
export const UserContext = createContext({
  currentUser: null,
  setCurrentuser: () => null,
});

// provider allow childer to access the value on value tag
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(null);
  const value = { currentUser, setCurrentuser };

  //signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user)=>{
        console.log(user)
    })

    return unsubscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
