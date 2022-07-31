import Header from "./components/home/header";
import { themeContext } from "./components/context/themecontext";
import { useEffect, useState } from "react";

import Main from "./components/main";
const App = () => {
  const [theme, setTheme] = useState<string>("light");
  const [query, setQuery] = useState<string>("");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Header
          handleChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <Main filter={query} />
      </div>
    </themeContext.Provider>
  );
};

export default App;
