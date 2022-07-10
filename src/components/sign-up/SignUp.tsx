import React, { useState, useEffect } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/FormInput";

const defaultFormState = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormState);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("Submitting...");
    if (formFields.password !== formFields.confirm_password) {
      alert(`Passwords do not match.`);
      return;
    }

    try {
      const { user }: any = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );

      await createUserDocumentFromAuth(user, { displayName: formFields.name });

      console.log("Submitted");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", err);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2> I do not have an account</h2>
      <span> Sign up with your username and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="name"
          type="text"
          required
          onChange={handleChange}
          value={formFields.name}
        />
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
        <FormInput
          label="Confirm Password"
          name="confirm_password"
          type="password"
          required
          onChange={handleChange}
          value={formFields.confirm_password}
        />
        <div className="buttons-container">
          <button type="submit"> Sign Up</button>
        </div>
      </form>
    </div>
  );
};
