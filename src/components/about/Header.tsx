import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
