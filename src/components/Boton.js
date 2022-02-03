import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

const Boton = ({title, onPress}) => {
    return (
        <View style={styles.button}>
            <Button title={title} onPress={onPress}/>
        </View>
    );
};

export default Boton;

const styles = StyleSheet.create({
    button:{
        width: "30%",
    }
});