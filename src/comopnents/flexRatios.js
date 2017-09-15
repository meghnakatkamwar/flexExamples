import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';

class FlexRatios extends Component {
    static navigationOptions = {
        title: 'Flex Ratios'
    };

    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this)
    }


    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('FlexWrap')
    }


    render() {

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" Flex ratio: 2 3 5 "/>
                <View style={styles.section1}>
                    <Box style={{flex:2,backgroundColor:'#FF3748'}}/>
                    <Box style={{flex:3,backgroundColor:'#4c71ff'}}/>
                    <Box style={{flex:5,backgroundColor:'#FFFF6B'}}/>
                </View>

                <SubHeading subHeading=" Flex ratio: 2  5  "/>
                <View style={styles.section2}>
                    <Box style={{flex:2,backgroundColor:'#FF3748'}}/>
                    <Box style={{backgroundColor:'#4c71ff'}}/>
                    <Box style={{backgroundColor:'#4c71ff'}}/>
                    <Box style={{flex:5,backgroundColor:'#FFFF6B'}}/>
                </View>
                <Button buttonName="Next" onPress={this.onButtonPress}/>

            </View>
        )
    }
}

export default FlexRatios;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 0.5
    },
    section2: {
        flexDirection: 'row',
        backgroundColor: '#96fff2',
        flex: 0.5
    }
});

