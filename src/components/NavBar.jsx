import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className=".container nav__container">
        <Link to={"/"} className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  activeClassName="active__link"
                  className="nav__link"
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <GoThreeBars />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
