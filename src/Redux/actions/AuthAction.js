import {
  SuccessLogin,
  RequestLogin,
  NewPassword,
  SuccessRegister,
  RequestSignup,
} from "@redux/constant";

export function RequestLoginFromUser(request) {
  return {
    type: RequestLogin,
    request,
  };
}
export function RequestRegisterFromUser(request) {
  return {
    type: RequestSignup,
    request,
  };
}

export function RegisterSuccess(user, access_token, userLoggedIn) {
  return {
    type: SuccessRegister,
    user,
    access_token,
    userLoggedIn,
  };
}

export function LoginSuccess(user, access_token, userLoggedIn) {
  return {
    type: SuccessLogin,
    user,
    access_token,
    userLoggedIn,
  };
}
export function ResetPassword(request) {
  return {
    type: NewPassword,
    request,
  };
}

export function RegisterUser() {
  return (dispatch) => {};
}
export function LoginUser() {
  return (dispatch) => {};
}
