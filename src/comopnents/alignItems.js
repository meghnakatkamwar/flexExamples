import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';

class AlignItems extends Component{
    static navigationOptions = {
        title: 'Align Items'
    };

    constructor(props){
        super(props);
        this.onButtonPress=this.onButtonPress.bind(this)
    }


    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('AlignItems2')
    }


    render(){

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" JustifyContent:flex-start & AlignItems: flex-start "/>
                <View style={styles.section1}>
                    <Box/>
                    <Box/>
                </View>

                <SubHeading subHeading=" JustifyContent:center & AlignItems: center "/>
                <View style={styles.section2}>
                    <Box/>
                    <Box/>
                </View>

                <SubHeading subHeading=" JustifyContent:flex-end & AlignItems: flex-end "/>
                <View style={styles.section3}>
                    <Box/>
                    <Box/>
                </View>
                <Button buttonName="Next" onPress={this.onButtonPress}/>

            </View>
        )
    }
}

export default AlignItems;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 0.5,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    section2: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    section3: {
        flexDirection: 'column',
        backgroundColor: '#bcff31',
        flex: 0.5,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
});

