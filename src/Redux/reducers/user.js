import {
  LoggedIn,
  RequestLogin,
  SuccessLogin,
  SuccessRegister,
  RequestSignup,
} from "@redux/constant";

const intialState = {
  userRequestLogin: false,
  registirationRequested: true,
  info: [{ name: "looool" }],
  accessToken: "",
  status: false,
  RegisterSuccess: false,
};
export default function auth(state = intialState, action) {
  switch (action.type) {
    case LoggedIn:
      return {
        ...state,
        userLoggedIn: action.info,
      };
    case RequestLogin:
      return {
        ...state,
        userRequestLogin: action.request,
      };
    case RequestSignup:
      return {
        ...state,
        registirationRequested: action.request,
      };
    case SuccessRegister:
      return {
        ...state,
        RegisterSuccess: action.request,
      };
    case SuccessLogin:
      return {
        ...state,
        userLoggedIn: true,
        user: action.info,
        accessToken: action.access_token,
      };
    default:
      return {
        ...state,
      };
  }
}
