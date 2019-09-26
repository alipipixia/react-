import React , { Component } from 'react';
import Counter from './Counter'
const style = {
    margin: '20px',
}

class ControlPannel extends Component {
    constructor(props) {
        super(props);

        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0, 10, 20];
        const initSum = this.initValues.reduce((a,b)=> a+b, 0); // 0作为reduce的第二个参数 reduce累加器，第一个参数回调，第二个参数：传给第一个回调的参数；第三个参数：数组当前索引；第四个参数当前数组
        this.state = {
            sum: initSum,
        }
    }

    componentWillMount() {
        console.log('enter ControlPannel: componentWillMount')
    }

    onCounterUpdate(newValue, previousValue) {
        console.log('有改变');
        console.log('newValue:' + newValue);
        console.log('previousValue:' + previousValue);
        const valueChange = newValue - previousValue;
        this.setState({
            sum: this.state.sdzum + valueChange,
        })
    }

    render() {
        console.log('enter ControlPannel: render')
        return (
            <div style={style}>
                <Counter caption="first" onUpdate={this.onCounterUpdate}></Counter>
                <Counter caption="second" onUpdate={this.onCounterUpdate} initValue={this.initValues[1]}></Counter>
                <Counter caption="third" onUpdate={this.onCounterUpdate} initValue={this.initValues[2]} ></Counter>
                <button onClick={()=>this.forceUpdate()}>click me to re-render!!</button>
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        )
    }



    componentDidMount() {
        console.log('enter componentDidMount: ControlPannel');
    }

    componentWillReceiveProps() {
        console.log('enter componentWillReceiveProps: ControlPannel');
    }
    shouldComponentUpdate() {
        console.log('enter shouldComponentUpdate: ControlPannel');
        return true;
    }
    componentWillUpdate() {
        console.log('enter componentWillUpdate: ControlPannel');
    }
    componentDidUpdate() {
        console.log('enter componentDidUpdate: ControlPannel');
    }
}

export default ControlPannel;