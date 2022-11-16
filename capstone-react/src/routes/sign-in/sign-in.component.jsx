import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signinWithGooglePopup,
  createUserDocumetFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const getDataFromRedirected = async () => {
  const response = await getRedirectResult(auth);
  if (response){
    const userDocRef = createUserDocumetFromAuth(response.user);
  }
};

const SignIn = () => {
  useEffect(() => {
    getDataFromRedirected();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = createUserDocumetFromAuth(user);

    //console.log(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
