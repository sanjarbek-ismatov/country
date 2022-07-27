import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
import {
  faToggleOn,
  faToggleOff,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Header = () => {
  const [theme, setTheme] = useState<string>("");
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <div className="content">
          <div className="input">
            <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
            <input type="text" placeholder="Mamlakatni yozing..." />
          </div>
          <div className="switch">
            <FontAwesomeIcon
              className="switchIcon"
              onClick={() => {
                localStorage.setItem(
                  "theme",
                  localStorage.getItem("theme") === "light" ? "dark" : "light"
                );
                setTheme(localStorage.getItem("theme") || "light");
              }}
              icon={theme === "dark" ? faToggleOn : faToggleOff}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
