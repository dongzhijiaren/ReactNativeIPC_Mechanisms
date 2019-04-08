import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';



export default class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            item:'default'
        }
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                {/*<Text style={styles.welcome}>登录页面</Text>*/}
                <Button
                    title="跳转到Page1"
                    onPress={()=>{
                        navigation.navigate('Page1',{name:'XiaoDong'})
                    }}
                />
                <Button
                    title="跳转到Page2"
                    onPress={()=>{
                        navigation.navigate('Page2')
                    }}
                />
                <Button
                    title="跳转到Page3"
                    onPress={()=>{
                        navigation.navigate('Page3',{title:'hello world！',mode:'eidt',changeItem:(itemString)=>this.setState({
                            item:itemString
                        })})
                    }}
                />
                <Text>{this.state.item}</Text>
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
