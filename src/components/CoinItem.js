import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const CoinItem = ({coin}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinNames}>
                <Image
                style={styles.image}
                source={{uri:coin.image}}
                />
                <View>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.textSysmbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View>
                    <Text style={styles.textPrice}>${coin.current_price}</Text>
                    <Text style={[coin.market_cap_change_percentage_24h > 0
                        ? styles.priceUp
                        : styles.priceDown]}>
                        %{coin.market_cap_change_percentage_24h.toFixed([2])}
                    </Text>
            </View>
        </View>
    );
};

export default CoinItem;

const styles= StyleSheet.create({
    containerItem:{
        backgroundColor:"#121212",
        paddingTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height: 100,
        borderBottomColor:"#ffffff",
        borderBottomWidth: 1,
    },
    image:{
        width: 60,
        height: 60,
    },
    text:{
        color:"#ffffff",
        paddingLeft: 10,
        fontSize:16,
    },
    textSysmbol:{
        color:"#434343",
        textTransform:"uppercase",
        fontSize:16,
        paddingLeft:10,
    },
    textPrice:{
        color:"#ffffff",
        fontSize:20,
        textAlign:"right",
    },
    coinNames:{
        flexDirection:"row"
    },
    priceUp:{
        color:"#6CD2A0",
        textAlign:"right",
        fontSize:16,
    },
    priceDown:{
        color:"#DF5D5D",
        textAlign:"right",
        fontSize:16,
    },
})