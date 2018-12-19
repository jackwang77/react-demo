import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'
import {addGUN,removeGUN,addGunAsync} from "./index.redux";
import './App.css';


class App extends Component {
    render() {
        return (
             <div>
                 <h1>现在有机关枪{this.props.num}</h1>
                 <button onClick={this.props.addGUN}>申请武器</button>
                 <button onClick={this.props.removeGUN}>上交武器</button>
                 <button onClick={this.props.addGunAsync}>延迟两天上交武器</button>
             </div>


        )
    }
}

const mapStateProps=(state)=>{
    return {num:state}
}

const actionCreators = {addGUN,removeGUN,addGunAsync}
App = connect(mapStateProps,actionCreators)(App)
export default App;