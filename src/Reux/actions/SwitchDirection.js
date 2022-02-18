import {
  GET_APP_LAYOUT_DIRECTION,
  SET_APP_LAYOUT_DIRECTION,
  SWITCH_LANGUAGE,
  GET_LANGUAGE,
} from "@redux/constant";

export const getAppLayoutDirection = () => ({
  type: GET_APP_LAYOUT_DIRECTION,
});
export const setAppLayoutDirection = (direction) => ({
  type: SET_APP_LAYOUT_DIRECTION,
  direction,
});

export const setAppLanguage = (Locale) => ({
  type: SWITCH_LANGUAGE,
  Locale,
});
export const getAppLanguage = () => ({
  type: GET_LANGUAGE,
});
