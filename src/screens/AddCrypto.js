import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import Boton from '../components/Boton';

const AddCrypto = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <View style={styles.viewText}>
                <Text style={styles.text}>Add a Cryptocurrency</Text>
                <SearchBar/>
            </View>
            <View style={styles.viewBoton}>
                <Boton
                style={styles.boton}
                title="Agregar"
                onPress={() => {
                    navigation.navigate('Home')
                }}
                />
            </View>
        </View>
    );
};

export default AddCrypto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    viewText:{
        alignItems:'flex-start',
        width:"100%",
        padding: 30,
    },
    text:{
        color:"#FFF",
        fontSize:20,
        paddingBottom:20,
    },
    bar:{
        width: "100%",
        alignItems:'center',
        justifyContent:'center',
    },
    boton:{
        alignItems: 'flex-end',
    },
    viewBoton:{
        alignItems: 'flex-end',
        width:"100%",
        padding: 20,
    },
});