import React, { useState, useEffect } from "react";
import {
  auth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/FormInput";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { SignInContainer, ButtonsContainer } from "./sign-in.styles.jsx";
import { Button, BUTTON_TYPE_CLASSES } from "../button/Button";

const defaultFormState = {
  email: "",
  password: "",
};

export const SignIn = () => {
  useEffect(() => {
    getRedirectResult(auth)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result?.user;

        console.log(user);
        console.log(token);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode);
        console.log(errorMessage);
        console.log(credential);
      });
  }, []);

  const logGoogleUser = async () => {
    await signInWithGoogleRedirect();
  };

  const [formFields, setFormFields] = useState(defaultFormState);

  const resetFormFields = () => {
    setFormFields(defaultFormState);
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const { user }: any = await signInAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );

      console.log(user);
      resetFormFields();
    } catch (err: any) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2> Already have an account?</h2>
      <span> Sign in with your username and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={formFields.email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          onChange={handleChange}
          value={formFields.password}
        />
        <ButtonsContainer>
          <Button type="submit"> Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Sign in With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
