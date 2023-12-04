import { faCube, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <header>
      <span>
        <FontAwesomeIcon icon={faCube} id="dashboard" />
        <h1>Dashboard</h1>
      </span>
      <FontAwesomeIcon icon={faCircleUser} id="profile" />
    </header>
  );
};
