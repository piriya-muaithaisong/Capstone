import { signinWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signinWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>
        Sign in With Google Popup
      </button>
    </div>
  );
};

export default SignIn;
