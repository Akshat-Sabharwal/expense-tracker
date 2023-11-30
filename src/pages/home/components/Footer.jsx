import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <h1>Expentia</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="socials" />
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} className="socials" />
          <a href="#">Facebook</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faYoutube} className="socials" />
          <a href="#">Youtube</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="socials" />
          <a href="#">Github</a>
        </li>
      </ul>
      <p>Copyrights Reserved</p>
    </footer>
  );
};
