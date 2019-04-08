
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Image,Button} from 'react-native';
export default class GetSet extends Component{
    constructor(){
        super();
    }
    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }
    render(){
        return (
            <View></View>
        );
    }
}