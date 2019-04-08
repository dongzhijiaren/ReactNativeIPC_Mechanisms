import {StackNavigator, createBottomTabNavigator,createStackNavigator,createAppContainer} from 'react-navigation'
import HomePage from './HomePage'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import LoginView from './LoginView'
import Job from './Job'//工作
import Message from './Message'//消息
import Mine from './Mine'//我的
import PublicDefine from './PublicDefine'//工具类



import React from 'react'
import {Button, Image, StyleSheet, Dimensions, PixelRatio} from 'react-native'

const Kscale = PublicDefine.Kscale;
const width = PublicDefine.width;
const height = PublicDefine.height;

export const AppTabNavigator = createBottomTabNavigator({

        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => {
                    return focused ?
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/首页.png')}/>
                        :
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/首页2.png')}/>
                }
            }
        },
        Job: {
            screen: Job,
            navigationOptions: {
                tabBarLabel: '工作',
                tabBarIcon: ({focused, tintColor}) => {
                    return focused ?
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/工作.png')}/>
                        :
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/工作2.png')}/>
                }
            }
        },
        Message: {
            screen: Message,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon: ({focused, tintColor}) => {
                    return focused ?
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/消息.png')}/>
                        :
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/消息2.png')}/>
                }
            }
        },
        Mine: {
            screen: Mine,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => {
                    return focused ?
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/我的.png')}/>
                        :
                        <Image resizeMode='center' style={[styles.tabbarIconStyles, {tintColor: tintColor}]}
                               source={require('../images/footerbar/我的2.png')}/>
                }
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#e16c3e',
        }
    });


const AppStackNavigatior = createStackNavigator({
        LoginView: {
            screen: LoginView,
            navigationOptions: {
                headerLeft: null
                // title:"登录页面",
                // headerTitleStyle:{flex:1,textAlign:'center'}
            }
        },
        Page1: {
            screen: Page1,
            // navigationOptions: ({navigation}) => ({
            //     title: '${navigation.state.params.name}页面名'
            // })
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                title: "Page2",
                // headerLeft: null
            }
        },
        Page3: {
            screen: Page3,
            //传值
            navigationOptions: (props) => {
                const {navigation} = props;
                const {state, setParams} = navigation;
                const {params} = state;
                return {
                    title: params.title ? params.title : '默认值',
                    headerRight: (
                        <Button
                            title={params.mode === 'edit' ? '保存' : '编辑'}
                            onPress={() => {
                                setParams({
                                    mode: params.mode === 'edit' ? '' : 'edit'
                                })
                            }}
                        />
                    )
                }
            }
        },
        TabNav: {
            screen: AppTabNavigator,
            navigationOptions: {
                // title: 'This is TabNavigator'
                 headerLeft: null
            }
        }
    }, {
        initialRouteName: 'LoginView', // 默认显示界面
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            // headerStyle:{
            //     backgroundColor:'white',
            //     borderBottomWidth: 0,
            //
            // },

        },
        // mode:'modal'  
        // mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        // headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        // onTransitionStart: () => {
        //     console.log('导航栏切换开始');
        // },  // 回调
        // onTransitionEnd: () => {
        //     console.log('导航栏切换结束');
        // },

    }
);

export const PPStackNavigatior = createAppContainer(AppStackNavigatior);

const styles = StyleSheet.create({
    tabbarIconStyles: {
        width: 20 * Kscale,
        height: 20 * Kscale
    }
});

