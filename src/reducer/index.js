import { ADD_CRYPTO_HOME, REMOVE_CRYPTO } from "../actions/types";

const initialState = [
];

function reducer(state= initialState, {type, payload}){
    switch(type){
        case ADD_CRYPTO_HOME: return [...state, {...payload}]
        case REMOVE_CRYPTO: return state.filter((contact) => contact.id !== payload);
        default: return state;
    }
}

export default reducer;