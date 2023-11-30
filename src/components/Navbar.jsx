import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTools,
  faUser,
  faInfo,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const navbarItems = [
    { name: "Home", icon: faHome },
    { name: "Tracker", icon: faTools },
    { name: "Login", icon: faUser },
    { name: "About", icon: faInfo },
  ];
  return (
    <nav>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCircleUser} className="navbar-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faHome} className="navbar-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faTools} className="navbar-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="navbar-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faInfo} className="navbar-icon" />
        </li>
      </ul>
    </nav>
  );
};
