import { useState, createContext } from "react";

export const themes = {
  light: {
    color: "#000000",
    background: "#F2F2F2",
  },

  dark: {
    color: "#fff",
    background: "#404040",
  },
};

export const headerThemes = {
  light: {
    background: "#DEF2B3",
  },

  dark: {
    background: " #262626",
  },
};

export const cardThemes = {
  light: {
    backgroundImage: "linear-gradient( to bottom, #65A603, #9BBF65, #EBF2B3)",
  },

  dark: {
    backgroundImage:
      "linear-gradient( to bottom, #262626, #404040, #737373, #A6A6A6)",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);
  const [themeHeader, setThemeHeader] = useState(headerThemes.light);
  const [themeCard, setThemeCard] = useState(cardThemes.light);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeHeader,
        setThemeHeader,
        themeCard,
        setThemeCard,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
