import {
  GET_APP_LAYOUT_DIRECTION,
  SET_APP_LAYOUT_DIRECTION,
} from "@redux/constant";
import { Config } from "@config";

const initialState = {
  layout: Config.Layout,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APP_LAYOUT_DIRECTION:
      return {
        ...state,
      };
    case SET_APP_LAYOUT_DIRECTION:
      return {
        ...state,
        layout: action.direction,
      };
    default:
      return state;
  }
};
