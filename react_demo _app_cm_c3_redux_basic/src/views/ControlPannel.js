import React, { Component } from 'react';
import store from '../Store';

import Counter  from './Counter';
import Summary  from './Summary';


const style = {
    margin: '20px',
}

class ControlPannel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={style}>
                <Counter caption="First"></Counter>
                <Counter caption="Second"></Counter>
                <Counter caption="Third"></Counter>
                <hr/>
                <Summary></Summary>
            </div>
        )
    }
}

export default ControlPannel;