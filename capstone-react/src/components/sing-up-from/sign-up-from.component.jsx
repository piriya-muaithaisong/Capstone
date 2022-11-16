import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumetFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultformField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFrom = () => {
  const [fromFields, setFromFields] = useState(defaultformField);
  const { displayName, email, password, confirmPassword } = fromFields;

  console.log(fromFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...fromFields, [name]: value });
  };

  const resetFormFields = () => {
    setFromFields(defaultformField)
  }
  const handleSubmit = async (event) => {
    
    event.preventDefault()
    
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user)

      await createUserDocumetFromAuth(user, { displayName });
      resetFormFields()

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email-already-in-use");
      }
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpFrom;
