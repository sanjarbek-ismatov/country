import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
import {
  faToggleOn,
  faToggleOff,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import { themeContext } from "../context/themecontext";
type changeEvent = {
  value: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};
const Header = (props: changeEvent) => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <div className="content">
            <div className="input">
              <FontAwesomeIcon
                className="searchIcon"
                icon={faMagnifyingGlass}
              />
              <input
                onChange={props.handleChange}
                value={props.value}
                type="text"
                placeholder="Mamlakatni yozing..."
              />
            </div>
            <div className="switch">
              <FontAwesomeIcon
                className="switchIcon"
                onClick={() => {
                  localStorage.setItem(
                    "theme",
                    localStorage.getItem("theme") === "light" ? "dark" : "light"
                  );
                  toggleTheme();
                }}
                icon={theme === "dark" ? faToggleOn : faToggleOff}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
