/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import App from './src/app';
import FlexDirection from './src/comopnents/flexDirection'
import ReverseDirection from './src/comopnents/reverseDirection';
import JustifyContent from './src/comopnents/justifyContent';
import JustifyContent2 from './src/comopnents/justifyContent2';
import AlignItems from './src/comopnents/alignItems'
import AlignItems2 from './src/comopnents/alignItems2';
import FlexRatios from './src/comopnents/flexRatios';
import FlexWrap from './src/comopnents/flexWrap';
import AspectRatio from './src/comopnents/aspectRatio';
import AlignSelf from './src/comopnents/alignSelf'
import FlexGrow from './src/comopnents/flexGrow';
import Test from './src/comopnents/test'


const flexExamples= StackNavigator({
    FlexDirection:{screen:FlexDirection},
    ReverseDirection:{screen:ReverseDirection},
    JustifyContent:{screen:JustifyContent},
    JustifyContent2:{screen:JustifyContent2},
    AlignItems:{screen:AlignItems},
    AlignItems2:{screen:AlignItems2},
    FlexRatios:{screen:FlexRatios},
    FlexWrap:{screen:FlexWrap},
    AspectRatio:{screen:AspectRatio},
    AlignSelf:{screen:AlignSelf},
    FlexGrow:{screen:FlexGrow}

})

AppRegistry.registerComponent('flexExamples', () => flexExamples);
