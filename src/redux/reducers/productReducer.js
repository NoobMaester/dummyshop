import {ActionTypes} from "../constants/action-types";


//DEFINING INITIAL STATE

const initialState = {
    products: [],
};

//DEFINING REDUCERS

//PROCUCT REDUCER
export const productReducer = (state = initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}

//SELECTED PRODUCT REDUCER
export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        default:
            return state;
    }
}

