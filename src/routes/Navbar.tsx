import { Outlet, Link } from "react-router-dom";
import resinLogo from "../assets/logo.png";
import "./navbar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signOutUser } from "../utils/firebase/firebase.utils";

export const Navbar = () => {
  const { currentUser, setCurrentUser }: any = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
  };
  console.log(currentUser);
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
            <span className="nav-link" onClick={signOutHandler}>
              {" "}
              SIGNOUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
