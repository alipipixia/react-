import React , { Component } from 'react';
import Counter from './Counter'
const style = {
    margin: '20px',
}

class ControlPannel extends Component {
    componentWillMount() {
        console.log('enter ControlPannel: componentWillMount')
    }

    render() {
        console.log('enter ControlPannel: render')
        return (
            <div style={style}>
                <Counter caption="first"></Counter>
                <Counter caption="second" initValue={10}></Counter>
                <Counter caption="third" initValue={20}></Counter>
                <button onClick={()=>this.forceUpdate()}>click me to re-render!!</button>
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