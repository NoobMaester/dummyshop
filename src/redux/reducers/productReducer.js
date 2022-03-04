import {ActionTypes} from "../constants/action-types";


//DEFINING INITIAL STATE

const initialState = {
    products: [],
};

//DEFINING A REDUCER

export const productReducer = (state = initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}