import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SubHeading from './subHeading';
import Button from './button';
import BoxWithNoDimensions from './boxWithNoDImensions'
import Box from './box'

class AlignItems2 extends Component {
    static navigationOptions = {
        title: 'Align Items'
    };

    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this)
    }


    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('FlexRatios')
    }


    render() {

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" JustifyContent:flex-start & AlignItems: stretch "/>
                <View style={styles.section1}>
                    <BoxWithNoDimensions/>
                    <Box/>
                </View>

                <SubHeading subHeading=" JustifyContent:center & AlignItems: stretch "/>
                <View style={styles.section2}>
                    <BoxWithNoDimensions/>
                    <BoxWithNoDimensions/>
                </View>

                <SubHeading subHeading=" JustifyContent:flex-end & AlignItems: stretch "/>
                <View style={styles.section3}>
                    <BoxWithNoDimensions/>
                    <Box/>
                </View>
                <Button buttonName="Next" onPress={this.onButtonPress}/>

            </View>
        )
    }
}

export default AlignItems2;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    section2: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    section3: {
        flexDirection: 'row',
        backgroundColor: '#bcff31',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }
});

