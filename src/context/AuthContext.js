import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const localToken = JSON.parse(localStorage.getItem("auth-token-repoprovas"));
  const [token, setToken] = useState(localToken);

  function persistToken(authToken) {
    setToken(authToken);
    localStorage.setItem("auth-token-repoprovas", JSON.stringify(authToken));
  }

  useEffect(() => {
    setToken(localToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, persistToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;