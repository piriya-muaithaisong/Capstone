// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignInFrom from "../../components/sing-in-from/sign-in-from.component";
import SignUpFrom from "../../components/sing-up-from/sign-up-from.component";
import './authentication.styles.scss'
// import {
//   auth,
//   signinWithGooglePopup,
//   createUserDocumetFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

// const getDataFromRedirected = async () => {
//   const response = await getRedirectResult(auth);
//   if (response){
//     const userDocRef = createUserDocumetFromAuth(response.user);
//   }
// };

const Authentication = () => {
  // useEffect(() => {
  //   getDataFromRedirected();
  // }, []);


  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
      <SignInFrom />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
