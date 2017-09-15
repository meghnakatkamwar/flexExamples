import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';

class ReverseDirection extends Component{
    static navigationOptions = {
        title: 'Reverse Directions'
    };

    constructor(props){
        super(props);
        this.onButtonPress=this.onButtonPress.bind(this)
    }


    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('JustifyContent')
    }


    render(){

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" Flex Direction:Column-Reverse "/>
                <View style={styles.section1}>
                    <Box/>
                    <Box/>
                    <Box/>
                </View>

                <SubHeading subHeading=" Flex Direction:Row-Reverse "/>
                <View style={styles.section2}>
                    <Box/>
                    <Box/>
                    <Box/>
                </View>
                <Button buttonName="Next" onPress={this.onButtonPress}/>

            </View>
        )
    }
}

export default ReverseDirection;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column-reverse',
        backgroundColor: '#96fff2',
        flex: 0.5
    },
    section2: {
        flexDirection: 'row-reverse',
        backgroundColor: '#bcff31',
        flex: 0.5
    }
});

