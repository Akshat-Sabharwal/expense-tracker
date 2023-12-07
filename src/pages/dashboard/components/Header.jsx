import { faCube, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../../Context/UserContext";
import { useContext } from "react";

export const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <>
      <span className="page-info">
        <FontAwesomeIcon icon={faCube} id="dashboard" />
        <h1>Dashboard</h1>
      </span>
      <span className="profile-info">
        <FontAwesomeIcon icon={faCircleUser} id="profile" />
        <p>{currentUser.username}</p>
      </span>
    </>
  );
};
