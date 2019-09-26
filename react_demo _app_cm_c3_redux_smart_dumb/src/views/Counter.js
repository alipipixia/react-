import React, {Component} from 'react';
import store from '../Store';
import * as Actions from '../Actions';

const buttonStyle = {
    margin: '10px',
}

//傻瓜组件或者展示组件
// class Counter extends Component {
//     render() {
//         const { caption, count, onClickIncrementButton, onClickDecrementButton} = this.props;
//         return (
//             <div>
//                 <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
//                 <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
//                 <span>{caption} count: {count}</span>
//             </div>
//         )
//     }
// }

//简化为
function Counter (props) {
    const { caption, count, onClickIncrementButton, onClickDecrementButton } = props;
    return(
        <div>
            <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
            <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
            <span>{caption} count: {count}</span>
        </div>
    );
}

//容器组件
class CounterContiner extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            count: store.getState()[this.props.caption],
        }
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    onClickIncrementButton() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onClickDecrementButton() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render() {
        const { caption } = this.props;
        return (
            <div>
                <Counter caption={caption} count={this.state.count} onClickDecrementButton={this.onClickDecrementButton} onClickIncrementButton={this.onClickIncrementButton}></Counter>
            </div>
        )
    }
}

export default CounterContiner;