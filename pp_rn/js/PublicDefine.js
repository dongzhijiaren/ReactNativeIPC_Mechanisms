
// 'use strict'
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView,Image,PixelRatio,Dimensions} from 'react-native';


const  {width,height}= Dimensions.get('window');

module.exports = {
    width: width,
    height: height,
    Kscale: width/375.0,

    //登录
    Key_username: 'Key_username',
    isLogined: false,
    username:'',
    loginKey:'',
};