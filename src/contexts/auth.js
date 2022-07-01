import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AutoProvider = ({ children }) => {
          const [user, setUser] = useState();

          return <AuthContext.Provider>{children}</AuthContext.Provider>
};