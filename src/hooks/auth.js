import React, { createContext, useCallback, useContext, useState } from "react";
import { validateLogin } from "../api/login";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem("user");

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ document, password }) => {
    const user = await validateLogin({ document, password });
    localStorage.setItem("user", JSON.stringify(user));
    setData({ user });
    return user;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
