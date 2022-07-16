import { SignUp } from "../components/sign-up/SignUp";
import { SignIn } from "../components/sign-in/SignIn";
import { AuthenticationContainer } from "./signinpage.styles.jsx";
export const SignInPage = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};
