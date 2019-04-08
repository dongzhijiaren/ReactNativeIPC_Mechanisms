
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,WebView} from 'react-native';
import PublicDefine from "./PublicDefine";



export default class Job extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://www.qq.com/',
            canGoBack: false,
        }
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <WebView
                    ref='wb'
                    automaticallyAdjustContentInsets={false}
                    style={{width:PublicDefine.width,height:PublicDefine.height-98}}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
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
