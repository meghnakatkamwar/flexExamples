import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';

class JustifyContent extends Component{
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
        navigate('JustifyContent2')
    }


    render(){

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" justifyContent: flex-end "/>
                <View style={styles.section1}>
                    <Box/>
                    <Box/>
                    <Box/>
                </View>

                <SubHeading subHeading=" justifyContent: center"/>
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

export default JustifyContent;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 0.5,
        justifyContent:'flex-end'
    },
    section2: {
        flexDirection: 'row',
        backgroundColor: '#bcff31',
        flex: 0.5,
        justifyContent:'center'
    }
});

