import { createContext, useState } from "react";

//as the actual value you want to acess
export const UserContext = createContext({
  currentUser: null,
  setCurrentuser: () => null,
});

// provider allow childer to access the value on value tag
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(null);
  const value = { currentUser, setCurrentuser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
