import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTools,
  faUser,
  faInfo,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faCircleUser} className="navbar-icon" />
          </Link>
        </li>

        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="navbar-icon" />
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTools} className="navbar-icon" />
          </Link>
        </li>

        <li>
          <Link to="/authentication">
            <FontAwesomeIcon icon={faUser} className="navbar-icon" />
          </Link>
        </li>

        <li>
          <Link to="/info">
            <FontAwesomeIcon icon={faInfo} className="navbar-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
