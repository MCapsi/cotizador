import { ADD_CRYPTO_HOME, REMOVE_CRYPTO } from "./types"

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