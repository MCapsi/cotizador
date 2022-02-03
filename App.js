import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import StackNavigator from "./src/navigator/StackNavigator"

export default function App() {
  return(
      <StackNavigator/>
  )
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
})
