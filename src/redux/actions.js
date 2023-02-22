import { DELETE_FAVORITE, ADD_FAVORITE } from "./types";

export const addToFavorites = (payload) => {

     return {
        type: ADD_FAVORITE,
        payload: payload
     };
};

export const deleteFavorite = (id) => {
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}