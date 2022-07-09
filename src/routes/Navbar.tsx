import { Outlet, Link } from "react-router-dom";
import resinLogo from "../assets/logo.png";
import "./navbar.styles.scss";

export const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={resinLogo} className="logo" width="100%" height="100%" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
