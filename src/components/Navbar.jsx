import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
