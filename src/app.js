import React,{Component} from 'react';
import {View} from 'react-native';
import {StackNavigator} from'react-navigation';
import FlexDirection from './comopnents/flexDirection';


class App extends Component{
    render(){
        return(
            <FlexDirection/>
        )
    }
}
// const App = StackNavigator({
//         FlexDirection:{
//             screen:FlexDirection
//         }
//     }
// );

export default App;