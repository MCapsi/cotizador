import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

const NavBar = ({}) => {

    const [search,setSearch] = useState("");
    console.log(search);

    return (
        <View style={styles.header}>
            <Text style={styles.title}>CryptoMarket</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor={'white'}
                onChangeText={(text) => setSearch(text)}
            />
        </View>
    );
};

export default NavBar;

const styles = StyleSheet.create({
    title:{
        color:"#fff",
        marginTop:10,
        fontSize:30,
    },
    searchInput:{
        color:"#fff",
        borderBottomColor:"#4657CE",
        borderBottomWidth: 1,
        width: "40%",
        textAlign:"center",
    },
    header:{
    flexDirection:"row",
    justifyContent:"space-between",
    width: "90%",
    marginBottom:10,
    },
});
