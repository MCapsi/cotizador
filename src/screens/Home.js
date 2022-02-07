import axios from "axios";
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import CoinItem from "../components/CoinItem"
import Boton from "../components/Boton";
import AddCrypto from "./AddCrypto";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoins } from "../actions";

export default function Home({navigation}) {

    const [coins, setCoins] = useState([]);
    const dispatch = useDispatch();
    const allCrypto = useSelector((state) => state.crypto)

    // useEffect(() => {
    // const apiInfo = async () => {
    //     var json = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h");
    //     setCoins(json.data);
    // }
    // apiInfo();
    // },[setCoins])

    useEffect(() => {
        dispatch(getAllCoins())
    },[dispatch])



    return (
        <View style={styles.container}>
            <StatusBar/>
            <FlatList
                style={styles.list}
                data={allCrypto}
                renderItem={({item}) =>{
                    return(
                        <CoinItem coin={item} />
                    );
                }}
                showsVerticalScrollIndicator={false}
            />
            <Boton
                title="Add"
                onPress={() => {
                    navigation.navigate('AddCrypto')
                }}
            />
        </View>
    );
    }

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
},
list:{
    width:"90%",
},
});
