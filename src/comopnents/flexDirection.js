import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './header';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';


class FlexDirection extends Component {
    constructor(props){
        super(props);
        this.onButtonPress=this.onButtonPress.bind(this)
    }
    static navigationOptions = {
        title: 'Flex Directions'
    };

    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('ReverseDirection')
    }


render(){

    return (
        <View style={{flex:1}}>
            <SubHeading subHeading=" Flex Direction-Column "/>
            <View style={styles.section1}>
                <Box/>
                <Box/>
                <Box/>
            </View>

            <SubHeading subHeading=" Flex Direction-Row "/>
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

export default FlexDirection;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 0.5
    },
    section2: {
        flexDirection: 'row',
        backgroundColor: '#bcff31',
        flex: 0.5
    }
});