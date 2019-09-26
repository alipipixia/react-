import React, {Component}  from 'react';
import PropTypes from 'prop-types'

const buttonStyle = {
    margin: '10px',
}

class Counter extends Component {
    constructor(props) {
        super(props); //一个组件需要定义自己的构造函数，需要在第一行通过super调用父类也就是React.Component的构造函数，如果不调用super(props),那么组件实例被构造出来之后，类实例的所有成员无法通过this.props访问到父组件传递过来的props值

        this.onClickIncreaseButton = this.onClickIncreaseButton.bind(this);
        this.onClickDecreaseButton = this.onClickDecreaseButton.bind(this);

        this.state = {
            count: this.props.initValue || 0,
        }
    }

    onClickIncreaseButton() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    onClickDecreaseButton() {
        this.setState({
            count: this.state.count - 1,
        })
    }

    componentWillMount() {
        console.log('enter componentWillMount:'+ this.props.caption );
    }
    render() {
        console.log('enter render：'+ this.props.caption);
        const {caption} = this.props;  //解构赋值
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncreaseButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecreaseButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }

    componentDidMount() {
        console.log('enter componentDidMount:' + this.props.caption );
    }

    componentWillReceiveProps() {
        console.log('enter componentWillReceiveProps:' + this.props.caption);
    }
    shouldComponentUpdate() {
        console.log('enter shouldComponentUpdate: counter' + this.props.caption);
        return true;
    }
    componentWillUpdate() {
        console.log('enter componentWillUpdate: counter' + this.props.caption);
    }
    componentDidUpdate() {
        console.log('enter componentDidUpdate: counter' + this.props.caption);
    }

}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
}

Counter.defaultProps = {
    initValue: 0,
}

export default Counter;