import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.base]}>
                <Text style={styles.text}>
                    {this.props.headerTitle}
                </Text>
            </View>
        )
    }
}

export default Header;

let styles = StyleSheet.create({
    base: {},
    text: {
        color: 'black',
        textAlign:'center',
        paddingTop:15,
        fontWeight:'800',
        fontSize:24
    }
});