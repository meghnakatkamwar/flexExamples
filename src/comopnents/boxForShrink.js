import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';


class BoxForShrink extends Component {
    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                <Text style={styles.textStyle}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

export default BoxForShrink;


let styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        margin: 2
    },
    textStyle: {
        textAlign: 'center',
        color: 'white'

    }
})