import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import AddCrypto from "../screens/AddCrypto"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerMode: 'screen',
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#121212' },
                        justifyContent: 'center',
                    }}
                >
                    <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'CryptoTracker',
                    }} />
                    <Stack.Screen
                        name="AddCrypto"
                        component={AddCrypto}
                        options={{
                            title: 'Back',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}