import { SignUp } from "../components/sign-up/SignUp";
import { SignIn } from "../components/sign-in/SignIn";
import "./signinpage.styles.scss";
export const SignInPage = () => {
  return (
    <div className="sign-in-page-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
