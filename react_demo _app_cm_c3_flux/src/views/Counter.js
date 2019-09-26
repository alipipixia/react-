import React, { Component } from 'react';
import * as Actions from '../Actions';
import CounterStore from '../stores/CounterStore';
import PropTypes from 'prop-types';

const buttonStyle = {
    margin: '10px',
}

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValues()[props.caption], //构造函数初始化this.state状态
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
                (nextState.count !== this.state.count);
    }

    //React组件如何派发action
    onClickIncrementButton() {
        Actions.increment(this.props.caption); //实例化Action.increment()构造函数
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange); // 通过CounterStore.addChangeListener监听CounterStore的改变,只要CounterStore发生变化,就调用onChange回调
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption]; //响应CounterStore状态变化
        this.setState({
            count: newCount,
        })
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span> {caption} count: {this.state.count} </span>
            </div>
        );
    }
}
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
}

export default Counter;