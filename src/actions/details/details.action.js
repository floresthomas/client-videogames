import axios from "axios";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAR_PAGE = "CLEAR_PAGE";

export const getDetails = (id) => {
  return async function (dispatch) {
    let detail = await axios.get(
      `https://api-videogames-production.up.railway.app/videogame/${id}`
    );
    return dispatch({
      type: GET_DETAILS,
      payload: detail.data,
    });
  };
};

export const clearPage = () => {
  return {
    type: CLEAR_PAGE,
  };
};
