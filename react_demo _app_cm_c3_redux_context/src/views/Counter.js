import React, {Component} from 'react';
// import store from '../Store';
import * as Actions from '../Actions';
import PropTypes from 'prop-types';

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
    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            count: this.context.store.getState()[this.props.caption],
        }
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }

    onClickIncrementButton() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }

    onClickDecrementButton() {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
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

CounterContiner.contextTypes = {
    store: PropTypes.object
}

export default CounterContiner;