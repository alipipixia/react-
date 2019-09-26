import React, {Component} from 'react';
import PropTypes from 'prop-types'
import store from '../Store';
import * as Action from '../Action';

const buttonStyle = {
    margin: '10px',
}

class Counter extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);

        this.onClickIncermentButton = this.onClickIncermentButton.bind(this);
        this.onClickDecermentButton = this.onClickDecermentButton.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            count: store.getState()[this.props.caption],
        };
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    onChange() {
        this.setState(this.getOwnState);
    }

    onClickIncermentButton() {
        store.dispatch(Action.increment(this.props.caption));
    }

    onClickDecermentButton() {
        store.dispatch(Action.increment(this.props.caption));
    }
    render() {
        const count = this.state.count;
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncermentButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecermentButton}>-</button>
                <span>{caption} count: {count} </span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
}

export default Counter;