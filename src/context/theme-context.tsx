import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "light" });




const ThemeProvider = (props) => {
  return <ThemeContext.Provider value = {{test: 'testtt'}}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
