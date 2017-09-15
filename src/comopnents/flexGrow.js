import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './header';
import Box from './box';
import SubHeading from './subHeading';
import Button from './button';
import BoxWithNoDimensions from './boxWithNoDImensions'
import BoxForShrink from './boxForShrink'


class FlexGrow extends Component {
    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this)
    }

    static navigationOptions = {
        title: 'Flex Grow/Shrink/Bases'
    };

    onButtonPress() {
        const {navigate} = this.props.navigation;
        console.log('button is pressed')
        navigate('')
    }


    render() {

        return (
            <View style={{flex:1}}>
                <SubHeading subHeading=" Flex Grow "/>
                <View style={styles.section1}>
                    <BoxWithNoDimensions text='flexGrow:1' style={{flexGrow:1}}/>
                    <BoxWithNoDimensions text='flexGrow:2' style={{flexGrow:2}}/>
                </View>

                <SubHeading subHeading=" Flex Shrink "/>
                <View style={styles.section2}>
                    <BoxForShrink text='flexShrink:0(default)' style={{width:200}}/>
                    <BoxForShrink text='flexShrink:2' style={{flexShrink:2, width:200}}/>
                    <BoxForShrink text='flexShrink:1' style={{flexShrink:1, width:200}}/>
                </View>
                <SubHeading subHeading=" Flex Basis "/>
                <View style={styles.section3}>
                    <BoxForShrink text='flexBasis:10' style={{flexBasis:10}}/>
                    <BoxForShrink text='flexBasis:20' style={{flexBasis:20}}/>
                    <BoxForShrink text='flexBasis:30' style={{flexBasis:30}}/>
                </View>
                <SubHeading subHeading=" Flex Basis "/>
                <View style={styles.section4}>
                    <BoxForShrink text='flexBasis:50' style={{flexBasis:50}}/>
                    <BoxForShrink text='flexBasis:100' style={{flexBasis:100}}/>
                    <BoxForShrink text='flexBasis:150' style={{flexBasis:150}}/>
                </View>

            </View>
        )
    }
}

export default FlexGrow;

let styles = StyleSheet.create({
    section1: {
        flexDirection: 'row',
        backgroundColor: '#96fff2',
        flex: 1
    },
    section2: {
        flexDirection: 'row',
        backgroundColor: '#bcff31',
        flex: 1
    },
    section3: {
        flexDirection: 'column',
        backgroundColor: '#ff663c',
        flex: 1,
        alignItems: 'flex-end'

    },
    section4: {
        flexDirection: 'row',
        backgroundColor: '#3eadff',
        flex: 1,
        alignItems: 'flex-end'

    }
});