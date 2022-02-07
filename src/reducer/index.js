import { ADD_CRYPTO_HOME, GET_ALL_COINS, REMOVE_CRYPTO } from "../actions/types";

const initialState = {
    crypto: [],
    allCrypto:[]
};

function reducer(state= initialState, {type, payload}){
    switch(type){
        case GET_ALL_COINS:
            return{
                ...state,
                crypto: payload,
                allCrypto: payload,
            }
        case ADD_CRYPTO_HOME: return [...state, {...payload}]
        case REMOVE_CRYPTO: return state.filter((coins) => coins.id !== payload);
        default: return state;
    }
}

export default reducer;