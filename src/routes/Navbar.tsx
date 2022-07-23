import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import resinLogo from "../assets/logo.png";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./navbar.styles.jsx";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "../components/cart-icon/CartIcon";
import CartDropdown from "../components/cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../store/user/user-selector";
import { getIsCartOpen } from "../store/cart/cart-selector";

export const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(getIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <img
            src={resinLogo}
            alt="rip-logo"
            className="logo"
            width="100%"
            height="100%"
          />
        </LogoContainer>
        <NavLinksContainer className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              {" "}
              SIGNOUT{" "}
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/sign-in">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
