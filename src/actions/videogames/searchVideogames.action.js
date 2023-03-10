import axios from "axios";
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME";

export const searchVideogame = (name) => {
  return async function (dispatch) {
    try {
      let search = await axios.get(
        `https://api-videogames-production.up.railway.app/videogames?name=${name}`
      );
      return dispatch({
        type: SEARCH_VIDEOGAME,
        payload: search.data,
      });
    } catch (err) {
      return dispatch({
        type: SEARCH_VIDEOGAME,
        payload: { err: err.response.data.msg },
      });
    }
  };
};
