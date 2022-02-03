import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const SearchBar = () => {
    return (
        <View>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor={'white'}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchInput:{
        color:"#fff",
        borderColor:"#4657CE",
        borderWidth: 1,
        width: Dimensions.get("window").width -60,
        textAlign:"left",
        padding:10,
    },
});