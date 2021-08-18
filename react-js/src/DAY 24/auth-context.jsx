import { createContext, useState } from "react";
const AuthData = createContext();

export function ContextFunction({ children }) {
  const [login, setLogin] = useState(false);
  return (
    <AuthData.Provider value={{login, setLogin}}> {children}</AuthData.Provider>
  );
}
export default AuthData; //not a component, use to retreive data stored in the auth-context file
// ContextFunction -> A parent component that contains all the children components whose states we want to use in different files
