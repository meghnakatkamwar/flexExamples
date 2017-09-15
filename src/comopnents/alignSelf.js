import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './header';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';


class AlignSelf extends Component {
    constructor(props){
        super(props);
        this.onButtonPress=this.onButtonPress.bind(this)
    }
    static navigationOptions = {
        title: 'Align Self'
    };

    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('FlexGrow')
    }


    render(){

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" AlignItems: center & AlignSelf: flex-end "/>
                <View style={styles.section1}>
                    <Box/>
                    <Box style={{alignSelf:"flex-end"}}/>
                    <Box/>
                </View>

                <SubHeading subHeading=" AlignItems: center & AlignSelf: flex-start "/>
                <View style={styles.section2}>
                    <Box style={{alignSelf:'flex-start'}}/>
                    <Box/>
                    <Box/>
                </View>
                <Button buttonName="Next" onPress={this.onButtonPress}/>

            </View>
        )
    }
}

export default AlignSelf;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 0.5,
        alignItems:'center'
    },
    section2: {
        flexDirection: 'row',
        backgroundColor: '#bcff31',
        flex: 0.5,
        alignItems:'center'
    }
});