const mainRoute = "";

export default Routes = {
  RegisterUser: `${mainRoute}/createAuth`,
  Search: (query) =>
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyCkDqBmtI_9m6Xqj0Q1rIr9gl3hAMR5BeY&cx=017576662512468239146:omuauf_lfve&q=${query}`,
};
export const PushNotification = {
  saveTokens: ``,
};
