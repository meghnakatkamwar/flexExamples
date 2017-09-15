import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './header';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';
import BoxForShrink from './boxForShrink'


class AspectRatio extends Component {
    constructor(props){
        super(props);
        this.onButtonPress=this.onButtonPress.bind(this)
    }
    static navigationOptions = {
        title: 'Aspect Ratio'
    };

    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('AlignSelf')
    }


    render(){

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" Aspect Ratio "/>
                <View style={styles.section1}>
                    <BoxForShrink text='aspectRatio:2,height:100' style={{aspectRatio:2,height:100}}/>
                    <BoxForShrink text='aspectRatio:2,width:400,maxHeight:70' style={{aspectRatio:2,width:400,maxHeight:70}}/>
                    <BoxForShrink text='aspectRatio:2,height:200,maxWidth:200' style={{aspectRatio:2,height:200,maxWidth:200}}/>
                    <BoxForShrink text='aspectRatio:2,height:50,width:50' style={{aspectRatio:2,height:50,width:50}}/>
                </View>


                <Button buttonName="Next" onPress={this.onButtonPress}/>

            </View>
        )
    }
}

export default AspectRatio;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'column',
        backgroundColor: '#96fff2',
        flex: 1
    }
    // section2: {
    //     flexDirection: 'row',
    //     backgroundColor: '#bcff31',
    //     flex: 0.5
    // }
});