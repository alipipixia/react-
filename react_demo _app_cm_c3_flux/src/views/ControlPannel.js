import React, { Component } from 'react';
import CounterStore from '../stores/CounterStore';
import SummaryStore from '../stores/SummaryStore';
import Counter from './Counter';
import Summary from './Summary'

const style = {
    margin: '20px',
}
class ControlPannel extends Component {
    render() {
        return (
            <div style={style}>
                <Counter caption="First"></Counter> 
                <Counter caption="Second"></Counter> 
                <Counter caption="Third"></Counter> 
                <hr />
                <Summary></Summary>
            </div>
        )
    }
}

export default ControlPannel;