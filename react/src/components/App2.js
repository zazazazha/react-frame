import React from 'react'
// 因为有状态，所以必须用class语法
// 初始化状态需要使用到钩子函数 constructor
class App extends React.Component {
  // 子类必须要在constructor方法中调用super方法，否则新建实例时会报错
  // 这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到和父类同样的实例和属性和方法，然后在对其进行加工，加上子类自己的实例属性和方法
  // 如果不调用super方法，子类就得不到this对象
  constructor (props) { // props包含了与父类同样的实例属性和方法
    super(props);
    this.state = { // 设定React的初始化状态 --对象
      msg: 'hello state'
    }
  }
  // render中渲染数据，其实就是js的语法外加了{}
  render () {
    return (
      <div>
        <h1>react组件的初始化状态</h1>
        { this.state.msg }
      </div>
    )
  }
}

export default App //必须要使用暴露