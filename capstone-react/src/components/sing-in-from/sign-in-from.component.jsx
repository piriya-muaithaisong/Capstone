import { useState } from "react";
import {
  signinWithGooglePopup,
  createUserDocumetFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FromInput from "../form-input/form-input.componet";
import './sign-in-form.styles.scss'

const defaultformField = {
  email: "",
  password: ""
};

const SignInFrom = () => {
  const [fromFields, setFromFields] = useState(defaultformField);
  const { email, password } = fromFields;

  console.log(fromFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...fromFields, [name]: value });
  };

  const resetFormFields = () => {
    setFromFields(defaultformField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)
      resetFormFields();
    } catch (error) {
      console.log(error)
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signinWithGooglePopup();
    await createUserDocumetFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form method="POST" onSubmit={handleSubmit}>
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

        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button buttonType='google' onclick={signInWithGoogle} >Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInFrom;
