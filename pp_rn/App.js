/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Image,Button} from 'react-native';
import {StackNavigator} from 'react-navigation'
import LoginView from './js/LoginView'
import {PPStackNavigatior} from './js/AppNavigators'
import PropTypes from 'prop-types'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Greeting extends Component{
  render(){
    return (
      <View>
        <Text style={{alignItems:'center'}}>
          <Text style={{backgroundColor:'blue',color:'white'}}>Hello {this.props.username}</Text>
        </Text>
    </View>
    );
  }
}
// 1，props和state的使用
class PP1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>props的使用</Text>
        <Greeting username='xiaodong'></Greeting>
        <Text>{'\n \n \n'}</Text>
        <Text>state的使用</Text>
          <TextInput style={styles.inputStyles} 
          onChangeText={(text) => this.setState({name:text})} />
          <Text style={{backgroundColor:'red',fontSize:24,color:'white'}}>{this.state.name}</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}
// 2，flex属性
class PP2 extends Component{
  
  render(){
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'red',height:50,flex:1}}></View>
        <View style={{backgroundColor:'green',height:50,flex:1}}></View>
        <View style={{backgroundColor:'orange',height:50,flex:1}}></View>
        <View style={{backgroundColor:'yellow',height:50,flex:1}}></View>
      </View>
    );
  }
}
// 3，Flexbox布局
class PP3 extends Component{
  render(){
    return (
      <View style={styles.flexboxStyles}>
        <View style={{backgroundColor:'purple',height:50,width:60}}></View>
        <View style={{backgroundColor:'red',height:60,width:80}}></View>
        <View style={{backgroundColor:'darkgray',height:70,width:60}}></View>
        <View style={{backgroundColor:'green',height:80,width:60}}></View>
      </View>
    );
  }
} 
// 4，组件的生命周期
class PP4 extends Component{
  static defaultProps = {
    name:'Xiao Ming',
    age:18
  }
  constructor(props){
    super(props);
    this.state={
      name:'Xiao A',
      age:20,
      count:0
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  render(){
    console.log('render');
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.name}，今年{this.age}岁了</Text> */}
        <Text>{this.state.name}，今年{this.state.age}岁了</Text>
        <Text>count={this.state.count}</Text>
        <Button 
          title = '点击'
          onPress = {()=>this.setState({count:this.state.count+1})}
        ></Button>
        <Text>{this.props.username},{this.props.ID}</Text>
      </View>
    );
  }
}
//属性类型检测
PP4.propTypes = {
  username:PropTypes.string.isRequired,
  password:PropTypes.string,
  ID:PropTypes.number
};

// 5，get和set方法
class Student extends Component {
      constructor(){
        super();
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get age(){
      return this._age;
    }
    set age(age){
      this._age = age;
    }
}

export default class App extends Component {
  componentDidMount(){
    var student = new Student();
    student.name = '小强';
    student.age  = 30;
    console.log('name>>:'+student.name+'今年'+student.age+'岁了');
  }
  render() {
    return (
        // <PP1></PP1>
        // <PP2></PP2>
        // <PP3></PP3>
        // <LoginView></LoginView>
        <PPStackNavigatior></PPStackNavigatior>
        // <PP4 username='Xiao Dong'></PP4>
        // <PP4 username={'Xiao Dong'} ID={18}></PP4>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // flexDirection: 'row'
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
  inputStyles: {
    height:40,
    borderColor:'gray',
    borderWidth:1,
    width:200
  },
  flexboxStyles: {
    flexDirection:'row',
    flex:1,
    backgroundColor:'#f5fcff',
    paddingTop:200,
    justifyContent:'space-around',
    // alignItems:'stretch'
  }
});
