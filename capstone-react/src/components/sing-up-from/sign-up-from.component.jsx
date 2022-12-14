import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumetFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FromInput from "../form-input/form-input.componet";
import "./sign-up-form.styles.scss";

const defaultformField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFrom = () => {
  const [fromFields, setFromFields] = useState(defaultformField);
  const { displayName, email, password, confirmPassword } = fromFields;

  //console.log(fromFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...fromFields, [name]: value });
  };

  const resetFormFields = () => {
    setFromFields(defaultformField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumetFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email-already-in-use");
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form method="POST" onSubmit={handleSubmit}>
        <FromInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FromInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FromInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FromInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpFrom;
