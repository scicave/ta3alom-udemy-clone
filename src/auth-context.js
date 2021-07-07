// TODO: use Redux lib instead

import React, { useState, createContext } from "react";

export const AuthContext = createContext(false);

export const AuthContextProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  return (
    <AuthContext.Provider value={[isAuthed, setIsAuthed]}>
      {children}
    </AuthContext.Provider>
  );
};
