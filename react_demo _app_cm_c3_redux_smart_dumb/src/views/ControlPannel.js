import React, { Component } from 'react';
import CounterContainer from './Counter';
import Summary from './Summary';

class ControlPannel extends Component {
    render(){
        return (
            <div>
                <CounterContainer caption="First"></CounterContainer>
                <CounterContainer caption="Second"></CounterContainer>
                <CounterContainer caption="Third"></CounterContainer>
                <hr/>
                <Summary></Summary>
            </div>
        )
    }
}

export default ControlPannel;