import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import{connect} from 'react-redux'

class Colorlistener extends Component {
  render() {
    return (
        
            <View style={styles.container}>
                <View style={{height:200,width:200,alignItems:'center',backgroundColor:this.props.color}}>
                <Text style={{fontSize:16}}>{this.props.name}</Text>
                <Text style={{fontSize:16}}>{this.props.Lastname}</Text>
                
                </View>
            </View>
        );
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
const mapStateToProps=(state)=>{
    return{
        color:state.color,
        name:state.name,
        Lastname:state.Lastname
    }

}
export default connect(mapStateToProps)(Colorlistener)