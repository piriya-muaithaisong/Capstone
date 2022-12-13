import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentuser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "user/SET_CURRENT_USER",
//   CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
//   GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
//   EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
//   SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
//   SIGN_IN_FAILED: "user/SIGN_IN_FAILED",
// };

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInfailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signUpSuccess = (user, additionalDetail) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalDetail,
  });

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
