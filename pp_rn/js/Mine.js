
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView,Image,ImageBackground,TouchableOpacity} from 'react-native';
import PublicDefine from './PublicDefine'
import Toast, {DURATION} from 'react-native-easy-toast'



const Kscale = PublicDefine.Kscale;
export default class Mine extends Component {

    menuDetails(menuName){

        if (menuName === '钱包') {

        }
        if (menuName === '修改密码') {

        }
        if (menuName === '联系我们') {

        }
        if (menuName === '关于') {

        }
    }

    render() {
        // const {navigation} = this.props;
        return (
            <ScrollView style={styles.container}>
                {/*//顶部个人信息*/}
                <View>
                    <ImageBackground
                        source={require('../images/mine/backimg.png')}
                        resizeMode='stretch'
                        style={styles.topImageStyles}
                    >
                        <View style={{flex:1}}>
                            <Text style={{marginLeft:10*Kscale,marginTop:56*Kscale,fontSize:22*Kscale,color:'white'}}>
                                李大壮
                            </Text>
                            <Text style={{marginLeft:10*Kscale,marginTop:20*Kscale,fontSize:22*Kscale,color:'white'}}>18514236638</Text>
                        </View>
                        <View sytle={{flex:1,marginRight:0,backgroundColor:'red'}}>
                            <Image
                                source={require('../images/mine/关于.png')}
                                style={{width:80*Kscale,height:80*Kscale,borderRadius:80*Kscale/2.0,marginTop:50*Kscale,marginRight:10*Kscale}}
                            />
                        </View>
                    </ImageBackground>
                </View>
                {/*//底部菜单*/}
                <View>
                    {/*钱包*/}
                    <TouchableOpacity style={styles.rowStyles}
                                      onPress={()=>{
                                          this.menuDetails('钱包');
                                      }}
                    >
                        <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                            <Image
                                source={require('../images/mine/钱包.png')}
                                style={{width:24*Kscale,height:24*Kscale,marginLeft:10*Kscale}}
                            />
                            <Text style={styles.rowTextStyles}>钱包</Text>
                        </View>
                        <View style={styles.lineStyles}></View>
                    </TouchableOpacity>
                    {/*修改密码*/}
                    <TouchableOpacity style={styles.rowStyles}
                                      onPress={()=>{
                                          this.menuDetails('修改密码');
                                      }}
                    >
                        <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                            <Image
                                source={require('../images/mine/修改密码.png')}
                                style={{width:24*Kscale,height:24*Kscale,marginLeft:10*Kscale}}
                            />
                            <Text style={styles.rowTextStyles}>修改密码</Text>
                        </View>
                        <View style={styles.lineStyles}></View>
                    </TouchableOpacity>
                    {/*当前版本*/}
                    <TouchableOpacity style={styles.rowStyles}
                                      onPress={()=>{
                                          this.menuDetails('当前版本');
                                      }}
                    >
                        <View style={{flexDirection:'row',flex:1}}>
                            <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                                <Image
                                    source={require('../images/mine/检查更新.png')}
                                    style={{width:24*Kscale,height:24*Kscale,marginLeft:10*Kscale}}
                                />
                                <Text style={styles.rowTextStyles}>当前版本</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:16*Kscale,color:"#646464",marginRight:10*Kscale}}>V1.0</Text>
                            </View>
                        </View>
                        <View style={styles.lineStyles}></View>
                    </TouchableOpacity>
                    {/*联系我们*/}

                    <TouchableOpacity style={styles.rowStyles}
                                      onPress={()=>{
                                          this.menuDetails('联系我们');
                                      }}
                    >
                        <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                            <Image
                                source={require('../images/mine/联系我们.png')}
                                style={{width:24*Kscale,height:24*Kscale,marginLeft:10*Kscale}}
                            />
                            <Text style={styles.rowTextStyles}>联系我们</Text>
                        </View>
                        <View style={styles.lineStyles}></View>
                    </TouchableOpacity>
                    {/*关于*/}

                    <TouchableOpacity style={styles.rowStyles}
                                      onPress={()=>{
                                          this.menuDetails('关于');
                                      }}
                    >
                        <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                            <Image
                                source={require('../images/mine/关于.png')}
                                style={{width:24*Kscale,height:24*Kscale,marginLeft:10*Kscale}}
                            />
                            <Text style={styles.rowTextStyles}>关于</Text>
                        </View>
                        <View style={styles.lineStyles}></View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    topImageStyles: {
        width:PublicDefine.width,
        height:160*Kscale,
        marginTop:0,
        flexDirection:'row',
    },
    lineStyles: {
        // flex:1,
        backgroundColor:'#f0f0f0',
        marginLeft:10*Kscale,
        marginRight:0,
        height:1,
        marginBottom:0
    },
    rowStyles: {
        flex:1,
        width:PublicDefine.width,
        height:64*Kscale,
    },
    rowTextStyles: {
        fontSize:16*Kscale,
        color:"#646464",
        marginLeft:8*Kscale
    }
});
