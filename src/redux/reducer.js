import { DELETE_FAVORITE, ADD_FAVORITE } from "./types";


const initialState = {
    myFavorites: [],
}

function rootReducer (state=initialState, {type, payload}){

    switch(type){

        case ADD_FAVORITE: return{
            ...state,
            myFavorites: [...state.myFavorites, payload]
        };

        case DELETE_FAVORITE: return {
            ...state,
            myFavorites: state.myFavorites.filter((del) => del.id != payload)

        };

        default: return state
    };


};





export default rootReducer;