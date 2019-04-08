import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView,Image,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import PublicDefine from './PublicDefine';
import Toast, {DURATION} from 'react-native-easy-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Kscale = PublicDefine.Kscale;

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isEditing_user:false,
            isEditing_pass:false,
            isPasswordShow:false,
        };
    }
    //点击事件（登录）
    loginPress(){
        const {navigation} = this.props;
        if (this.state.username === ''){
            // this.refs.toast.show('请输入正确的手机号！');
            this.refs.toast.show('手机号不能为空！');
            return;
        }
        if (this.state.password === ''){
            this.refs.toast.show('请输入密码！');
            return;
        }
        this.refs.toast.show('登录成功！');
        navigation.navigate('TabNav',{title:'首页'})
    }

    render() {
        const {navigation} = this.props;
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
                >
                    <Image source={require('../images/login/topLogo.png')}
                           style={styles.logoStyles}
                    />
                    {/* <Image source={require('./icon_home.png')}/> */}
                </TouchableOpacity>
                <View style={{marginTop:90,alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingBottom:5}}>
                        {
                            this.state.isEditing_user ?
                                <Image source={require('../images/login/Profile_select.png')}
                                       style={{marginLeft:20*Kscale,width:25*Kscale,height:25*Kscale}}/>
                                :
                                <Image source={require('../images/login/Profile.png')}
                                       style={{marginLeft:20*Kscale,width:25*Kscale,height:25*Kscale}}/>
                        }
                        <TextInput
                            placeholder='请输入手机号'
                            keyboardType='numeric'
                            style={{flex:1,marginLeft:30*Kscale,height:40*Kscale,fontSize:16*Kscale}}
                            onChangeText={(text) => this.setState({
                                username:text,
                                isEditing_user:true
                            })}
                            onEndEditing={()=>{this.setState({
                                isEditing_user:false
                                })
                            }}
                        />
                    </View>
                    {
                        this.state.isEditing_user ? <View style={styles.bottomLineStyles_select} /> : <View style={styles.bottomLineStyles} />
                    }
                    <View style={{marginTop:50,flexDirection:'row',alignItems:'center',paddingBottom:5}}>
                        {
                            this.state.isEditing_pass ? <Image source={require('../images/login/Lock_select.png')}
                                style={{marginLeft:20*Kscale,width:20*Kscale,height:25*Kscale}}/>
                                :
                                <Image source={require('../images/login/Lock.png')}
                                    style={{marginLeft:20*Kscale,width:20*Kscale,height:25*Kscale}}/>
                        }
                        <TextInput
                            placeholder='请输入密码'
                            secureTextEntry={!this.state.isPasswordShow}
                            style={{flex:1,marginLeft:34*Kscale,height:40*Kscale,fontSize:16*Kscale}}
                            onChangeText={(text) => this.setState({
                                password:text,
                                isEditing_pass:true
                        })}
                            onEndEditing={()=>{this.setState({
                                isEditing_pass:false
                            })
                            }}
                        />
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                    isPasswordShow:!this.state.isPasswordShow
                                })
                            }}
                        >
                            {
                                this.state.isPasswordShow ? <Image
                                source={require('../images/login/Eye_show.png')}
                                style={{width:28*Kscale,height:17*Kscale,marginRight:20*Kscale}}/>
                                : <Image
                                source={require('../images/login/Eye_hidden.png')}
                                style={{width:28*Kscale,height:17*Kscale,marginRight:20*Kscale}} />
                            }
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.isEditing_user ? <View style={styles.bottomLineStyles_select} /> : <View style={styles.bottomLineStyles} />
                    }
                    {/*//登录*/}
                    <TouchableOpacity style={styles.loginButtonStyles}
                                      onPress={()=>{
                                          this.loginPress();
                                      }}
                    >
                        <Text style={{color:'white',fontSize:16.0*Kscale}}>登录</Text>
                    </TouchableOpacity>
                </View>
                <Toast ref="toast" position={'center'} style={{marginTop:100}}/>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoStyles: {
        width: 80*Kscale,
        height: 80*Kscale,
        marginTop:64*Kscale
    },
    bottomLineStyles_select: {
        width:PublicDefine.width-20*Kscale,
        height:1,
        backgroundColor:'#e89431',
        opacity: 0.2
    },
    bottomLineStyles: {
        width:PublicDefine.width-20*Kscale,
        height:1,
        backgroundColor:'#4b453a',
        opacity: 0.2
    },
    loginButtonStyles: {
        marginTop:45*Kscale,
        width: 355*Kscale,
        height: 40*Kscale,
        borderRadius: 5,
        backgroundColor: "#e16c3e",
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40*Kscale
    }
});
