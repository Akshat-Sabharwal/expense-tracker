import sideImage from "../../../assets/hero.png";
import { useNavigate } from "react-router-dom";

export const Second = () => {
  const navigate = useNavigate();
  return (
    <section id="second">
      <img src={sideImage} alt="Save your expenses" />
      <article>
        <h1>The One-Stop Solution for your Expenses</h1>
        <p>
          Duis aliquip adipisicing cillum aliquip. Et pariatur qui ex ea.
          Proident dolore ullamco proident nisi tempor ea. Amet et nulla tempor
          enim adipisicing.
        </p>
        <button onClick={() => navigate("/page-not-found")}>Know More</button>
      </article>
    </section>
  );
};
