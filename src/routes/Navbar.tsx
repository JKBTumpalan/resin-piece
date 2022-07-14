import { Outlet, Link } from "react-router-dom";
import resinLogo from "../assets/logo.png";
import "./navbar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "../components/cart-icon/CartIcon";
import CartDropdown from "../components/cart-dropdown/CartDropdown";
import { CartContext } from "../context/CartContext";

export const Navbar = () => {
  const { currentUser }: any = useContext(UserContext);
  const { isCartOpen }: any = useContext(CartContext);
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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGNOUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
