import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableHighlight,TextInput} from 'react-native'
import {setBLUE ,setRED, setYELLOW,setPINK, setLASTNAME} from '../service/action'
import {connect} from 'react-redux'
 class Colorchanger extends Component {

 colorDispatcher=(c ,text)=>{
     if(c==='BLUE'){
         this.props.dispatch(setBLUE())
     }
     else if(c==='RED'){
         this.props.dispatch(setRED())
     }
     else if(c==='YELLOW'){
         this.props.dispatch(setYELLOW())
     }
    else if(c==='PINK'){
        this.props.dispatch(setPINK())
    }
    else if(c==='LASTNAME'){
        this.props.dispatch(setLASTNAME(text))
    }

 }
 render(){
     return(
         
        <View style={styles.container}>
        <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'BLUE' )}><Text>BLUE</Text></TouchableHighlight>
        <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'RED' )}><Text>RED</Text></TouchableHighlight>
        <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'YELLOW' )}><Text>YELLOW</Text></TouchableHighlight>
        <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'PINK' )}><Text>PINK</Text></TouchableHighlight>
        <View><TextInput onChangeText={(this.colorDispatcher.bind(this , 'LASTNAME' ))}
        style={{width:200,height:40,borderWidth:1,borderColor:'black'}}></TextInput></View>
    </View>
     );
 }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        
        
    },
});

const mapStateToProps=(state)=>{
    return{
        color:state.color
    }
}
export default connect(mapStateToProps)(Colorchanger);