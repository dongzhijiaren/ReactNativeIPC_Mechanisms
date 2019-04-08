
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import PublicDefine from "./PublicDefine";

export default class Message extends Component {

    constructor(props) {
        super(props);
        var totalCount=10;
        // 初始状态
        this.state = {
            count: totalCount,
        };
    }

    static navigationOptions =({ navigation }) =>(
        {
            title: navigation.state.params.title,
        }
    );

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                {/*<Text>消息页面</Text>*/}
                <Text>消息页面{this.state.count}</Text>
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
