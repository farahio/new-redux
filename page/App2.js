import React, { Component } from 'react'
import { Text,StyleSheet} from 'react-native'
import { createStore } from 'redux';
import {Provider}  from 'react-redux';
import Colorchanger from '../Component/Colorchanger';
import Colorlistener from '../Component/Colorlistener';
import reducer from '../service/reduser'

const store=createStore(reducer)

 class App2 extends Component {
  render() {
    return (
      <Provider style={styles.container} store={store}>
          <Colorchanger/>
          <Colorlistener/>
      </Provider>

      
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
});
export default App2;