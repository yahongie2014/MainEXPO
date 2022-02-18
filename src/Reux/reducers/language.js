/** @format */

import { Config } from "@config";
import { SWITCH_LANGUAGE, GET_LANGUAGE } from "@redux/constant";

const initialState = {
  lang: Config.Language,
  listLanguage: Config.listLanguage,
};

export default (state = initialState, action) => {
  const { lang } = action;
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        ...state,
        lang,
      };
    case GET_LANGUAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
