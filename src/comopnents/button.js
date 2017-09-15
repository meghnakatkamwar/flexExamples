import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';


class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonContainerStyle} onPress={this.props.onPress}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>{this.props.buttonName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Button;

let styles = StyleSheet.create({
    buttonContainerStyle:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {

        height: 40,
        width: 60,
        backgroundColor: '#368',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
    }
})