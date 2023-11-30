export const Navbar = () => {
  const navbarItems = ["Home", "Tracker", "Login", "About"];
  return (
    <nav>
      <ul>
        {navbarItems.map((item) => (
          <li key={item.toLowerCase()}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};
