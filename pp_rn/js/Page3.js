/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';


export default class Page3 extends Component {
    constructor(props){
        super(props);
        this.state={ 
            inputString:''
        }
    }
    render() {
        //获取参数
        const {navigation} = this.props;
        const {state, setParams} = navigation;
        const {params} = state;
        // const {state:{params:{changeItem}}} = this.props.navigation;
        const {changeItem} = params;
        // const {changeItem} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Page3!</Text>
                <Button
                    title="返回"
                    onPress={()=>{
                        navigation.goBack();
                        changeItem(this.state.inputString)
                    }}
                />
                <TextInput
                    style={{height:50,marginTop:20,borderWidth:1,width:200}}
                    onChangeText={text => this.setState({inputString:text})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop:150
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
