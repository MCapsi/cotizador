import { ADD_CRYPTO_HOME, REMOVE_CRYPTO, GET_ALL_COINS } from "./types";
import axios from "axios";

export function getAllCoins(){
    return async  function(dispatch){
        var json = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h");
        return dispatch({
            type: GET_ALL_COINS,
            payload: json.data,
        })
    }
}

export function addCryptoHome(name, logo, symbol, price, porc){
    return{
        type:ADD_CRYPTO_HOME,
        payload:{name, logo, symbol, price, porc}
    }
}

export function removeCrypto(id){
    return{
        type:REMOVE_CRYPTO,
        payload:{id}
    }
}