# React Native基础入门及底层通信原理

> * 基础知识和工作原理(RN和Native通信原理)
> * 生命周期、常用控件、布局
> * 常用导航和代码调试

------

## 1.1 传统APP几种主要的开发方法
![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn1.png)


----------



## 1.2 React Native的简单介绍
React Native是facebook开源的一款跨平台UI开发框架，相对于其他的hybrid的框架，其所面向的工作环境已经跳出了浏览器环境。
能做到既拥有原生native的交互体验，又能够保持web的高效与灵活，因此发布起就引起了业内极大的关注，目前已经可支持iOS和andorid两套平台。
## 1.3 React Native的特点
---
> * React Native里面没有webview，运行性能会更好；
> * 采用了类似css flexbox的布局理念完成页面布局；
> * 扩展性更强，Native端提供的是基本控件，JS可以自由组合使用；
> * 支持直接热更新和远程调试；
> * 能与原生控件进行交互，运行更流畅；
> * 尊重平台特性，不强求一份原生代码支持多个平台

## 1.4 React Native的环境部署和项目运行
参照网站
https://facebook.github.io/react-native/ 
https://reactnative.cn/
开发工具：
vs code、webstorm、sublime等

## 1.5 React Native的开发模式，如下图所示：
![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn2.png)

## 1.6 React Native的通信机制，如下图所示：
![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn3.png)

![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn4.png)

## 1.7 原理详解(以OC为例)：

- **核心**：**原生端和JS端都保存了一份模块配置表，里面标记了所有原生暴露的模块和方法。**

伪代码举例：![avatar](https://upload-images.jianshu.io/upload_images/292976-15cc488b9ff10c03.png?imageMogr2/auto-orient/)

- JS调用原生模块方法时，通过模块配置表把请求分解为模块ID、方法ID和参数传给原生，原生通过模块配置表找到对应的方法并执行。

![avatar](https://upload-images.jianshu.io/upload_images/292976-b4c9279cf787a4d4.png?imageMogr2/auto-orient/)

- React Native启动流程
![avatar](https://upload-images.jianshu.io/upload_images/292976-d3e695115b091c93.png?imageMogr2/auto-orient/)

- 具体流程
1，创建RCTBridge
桥接对象,管理JS和OC交互，它内部持有一个RCTBatchBridge对象
2，创建RCTBatchBridge
JS和OC交互主要是由它实现的
3，执行[RCTBatchedBridge loadSource]
加载JS源码
4，执行[RCTBatchedBridge initModulesWithDispatchGroup]
创建模块配置表
5，执行[RCTJSCExecutor injectJSONText]
往js中注入模块配置表
6，执行完JS代码，回调OC，调用OC中的组件


## 2.1 组件的生命周期
![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn5.jpg)


## 2.2 props和state来管理组件的状态

> * 我们使用两种数据来控制一个组件：props和state。props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。
对于需要改变的数据，我们需要使用state。
> * props和state区分：
props和state都是用于描述组件的特性，this.props标识那些本组件无法改变的特性，而this.state是会随着用户互动而产生变化的特性。


用props和state完成以下例子：
```React
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

export default class App extends Component<Props> {
render() {
return (
<PP1></PP1>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
flexDirection: 'row'
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

```
## 2.3 Flexbox布局

> * 我们在React Native中使用Flexbox规则来指定某个组件的子元素的布局。Flexbox可以在不同屏幕尺寸上提供一致的布局结构。
> * 一般来说，使用flexDirection(主轴和次轴)、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求。

## 2.4 Flexbox布局主要参数


> * Flex Direction

在组件的style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。

> * Justify Content

在组件的 style 中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around、space-between以及space-evenly。

> * Align Items

在组件的 style 中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式

具体实现如下：
```react
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
export default class App extends Component<Props> {
render() {
return (
<PP3></PP3>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
flexDirection: 'row'
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
```

## 3.1 React Native的常用导航器：react-navigation

>  react-navigation的出现替代了Navigator、Ex-Navigation等老一代的导航组件，react-navigation可以说是Navigator的加强版，不仅有Navigator的全部功能，另外还支持底部导航类似于与iOS中的UITabBarController，此外它也支持侧拉效果方式的导航类似于Android中的抽屉效果。
![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn6.png)

## 3.2 React Native安装和导入开源框架：

> * 安装： npm install --save react-navigation 或者 yarn add react-navigation
> * 导入： import {StackNavigator} from 'react-navigation'

## 3.3 代码调试

1，Developer Menu（模拟器和真机） 
> * Android模拟器：可以通过Command⌘ + M 快捷键来快速打开Developer
Menu。也可以通过模拟器上的菜单键来打开。 

> * iOS模拟器：可以通过Command⌘ + D快捷键来快速打开Developer Menu。
真机：可以通过摇动手机来开启Developer Menu。

2，Chrome Developer Tools
> * Element 面板： 用于查看和编辑当前页面中的 HTML 和 CSS 元素。
> * Network 面板：用于查看 HTTP 请求的详细信息，如请求头、响应头及返回内容等。
> * Source 面板：用于查看和调试当前页面所加载的脚本的源文件。
> * TimeLine 面板： 用于查看脚本的执行时间、页面元素渲染时间等信息。
> * Profiles 面板：用于查看 CPU 执行时间与内存占用等信息。
> * Resource 面板：用于查看当前页面所请求的资源文件，如 HTML，CSS 样式文件等。
> * Audits 面板：用于优化前端页面，加速网页加载速度等。
> * Console 面板：用于显示脚本中所输出的调试信息，或运行测试脚本等。

## 3.4 调试工具
![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn7.png)


## 3.5 React Native和Flutter比较
![avatar](http://git.pptv.com/17061635/share/raw/master/%E5%85%B1%E4%BA%AB%E6%96%87%E6%A1%A3/%E5%BC%A0%E6%A0%8B/React%20Native/images/rn8.png)
