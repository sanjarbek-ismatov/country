import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
import {
  faToggleOn,
  faToggleOff,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
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
                  localStorage.getItem("theme") ? "false" : "true"
                );
              }}
              icon={localStorage.getItem("theme") ? faToggleOn : faToggleOff}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
