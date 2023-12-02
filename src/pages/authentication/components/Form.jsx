import authForm from "../../../assets/form.png";

export const Form = () => {
  return (
    <section className="auth">
      <aside id="left">
        <h1>Form</h1>
        <img src={authForm} alt="Authentication Form" />
      </aside>
      <aside id="right">
        <form>
          <fieldset>
            <input type="text" placeholder="Username" id="username" />
            <input type="password" placeholder="Password" id="password" />
          </fieldset>
          <input type="submit" id="submit" />
        </form>
      </aside>
    </section>
  );
};
