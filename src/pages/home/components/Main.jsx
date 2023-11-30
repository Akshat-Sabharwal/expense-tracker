import sideImage from "../../../assets/side-image.png";

export const Main = () => {
  return (
    <main>
      <article>
        <h1>Want some money? Give yourself some.</h1>
        <p>
          Duis aliquip adipisicing cillum aliquip. Et pariatur qui ex ea.
          Proident dolore ullamco proident nisi tempor ea. Amet et nulla tempor
          enim adipisicing. Et cupidatat est occaecat sunt sunt. Consectetur
          cupidatat mollit exercitation voluptate id. Commodo ad exercitation
          magna ex in aliqua quis.
        </p>
      </article>
      <img src={sideImage} alt="Save your expenses" />
      <button>Get Started</button>
    </main>
  );
};
