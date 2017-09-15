import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class SubHeading extends Component{
    render(){
        return(
            <Text style={styles.subHeadingStyle}>{this.props.subHeading}</Text>
        )
    }
}

export default SubHeading;

let styles= StyleSheet.create({
    subHeadingStyle:{
        textAlign:'center'
    }
})