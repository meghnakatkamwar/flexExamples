import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';

class JustifyContent2 extends Component{
    static navigationOptions = {
        title: 'Justify Content'
    };

    constructor(props){
        super(props);
        this.onButtonPress=this.onButtonPress.bind(this)
    }


    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('AlignItems')
    }


    render(){

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" justifyContent: space-between "/>
                <View style={styles.section1}>
                    <Box/>
                    <Box/>
                    <Box/>
                </View>

                <SubHeading subHeading=" justifyContent: space-around"/>
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

export default JustifyContent2;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'row',
        backgroundColor: '#96fff2',
        flex: 0.5,
        justifyContent:'space-between'
    },
    section2: {
        flexDirection: 'row',
        backgroundColor: '#bcff31',
        flex: 0.5,
        justifyContent:'space-around'
    }
});

