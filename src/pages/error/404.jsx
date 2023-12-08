import "./404.css";
import image from "../../assets/404.png";

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <img src={image} alt="404 Page not found!!" />
      <h1>Page not found</h1>
    </div>
  );
};
