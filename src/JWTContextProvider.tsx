import React, { createContext, useState } from "react";

export const JWTContext = createContext<{ setToken(t: string): void }>({
  setToken(t: string) {},
});

export function JWTContextProvider({ children }: { children: JSX.Element }) {
  function updateToken(t: string) {
    localStorage.setItem("token", t);
    window.location.reload();
  }

  return (
    <JWTContext.Provider value={{ setToken: updateToken }}>
      {children}
    </JWTContext.Provider>
  );
}
