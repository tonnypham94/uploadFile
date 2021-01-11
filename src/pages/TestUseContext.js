import React, { useContext, useState } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function TestUseContext() {
  const [theme, setTheme] = useState(themes.light)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const data = useContext(ThemeContext);
  return (
    <button onClick={() => data.setTheme(themes.dark)} style={{ background: data.theme.background, color: data.theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}