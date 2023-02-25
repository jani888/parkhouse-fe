import React, { createContext, useState } from "react";

export const JWTContext = createContext<{ setToken(t: string): void }>({
  setToken(t: string) {},
});

export function JWTContextProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useState("");

  function updateToken(t: string) {
    localStorage.setItem("token", t);
    setToken(t);
  }

  return (
    <JWTContext.Provider key={token} value={{ setToken: updateToken }}>
      {children}
    </JWTContext.Provider>
  );
}
