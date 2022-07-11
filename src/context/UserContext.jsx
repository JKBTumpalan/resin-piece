import { createContext, useState } from "react";

//actual value I want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //tslint:disable-next-line
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
