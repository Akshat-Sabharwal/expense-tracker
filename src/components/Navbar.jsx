import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCube,
  faInfo,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export const Navbar = ({ showProfile }) => {
  const { currentUser } = useContext(UserContext);
  return (
    <nav>
      <ul>
        {showProfile && (
          <li>
            <Link to="/profile" className="link">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="navbar-icon profile"
              />
              <p>
                {currentUser.username === "" ? "Guest" : currentUser.username}
              </p>
            </Link>
          </li>
        )}
        <li>
          <Link to="/" className="link">
            <FontAwesomeIcon icon={faHome} className="navbar-icon" />
            <p>Home</p>
          </Link>
        </li>

        <li>
          <Link
            to={currentUser.username === "" ? "/authentication" : "/dashboard"}
            className="link"
          >
            <FontAwesomeIcon icon={faCube} className="navbar-icon" />
            <p>Dashboard</p>
          </Link>
        </li>

        <li>
          <Link to="/page-not-found" className="link">
            <FontAwesomeIcon icon={faInfo} className="navbar-icon" />
            <p>Info</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
