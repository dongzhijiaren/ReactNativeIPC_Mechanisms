/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class Page1 extends Component {

    static navigationOptions =({ navigation }) => {
        const params = navigation.state.params || {};
        return{
            title: '首页',
            headerLeft: (
                <Button
                    title="返回"
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
            )
        };

    };
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    
    componentDidMount(){
        //箭头函数
        var f = (a,b)=>{
            return a+b;
        }
        var num = f(5,10);
        console.log('num>>>'+num);
    }
    render() {
        const {navigation} = this.props;
        const {state,setParams} = navigation;
        const {params} = state;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Page1,{params.name}</Text>
                <Button
                    title="返回"
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
