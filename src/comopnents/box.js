import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';


class Box extends Component {
    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                <Text style={styles.textStyle}>{this.props.text}</Text>
            </View>
        )
    }
}

export default Box;


let styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        margin: 2,
        height: 40,
        width: 40
    },
    textStyle:{
        textAlign:'center',
        color:'white'

    }
})