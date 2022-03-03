import {ActionTypes} from "../constants/action-types";


//DEFINING INITIAL STATE

const initialState = {
    products: [
        {
            id:1,
            title:"Jughead",
            category: "programmer",
        },
    ],
};

//DEFINING A REDUCER

export const productReducer = (state = initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}