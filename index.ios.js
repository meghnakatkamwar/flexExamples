/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import App from './src/app';


export default class flexExamples extends Component {
    render() {
        return (
            <View style={styles.container}>
              <App/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }

});

AppRegistry.registerComponent('flexExamples', () => flexExamples);
