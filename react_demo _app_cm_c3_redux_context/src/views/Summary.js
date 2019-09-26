import React ,{Component} from 'react';
// import store from '../Store';
import PropTypes from 'prop-types';

class Summary extends Component {
    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);

        this.computeSummary = this.computeSummary.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    computeSummary() {
        const initValues = this.context.store.getState();
        let summary = 0;
        for(const key in initValues){
            if(initValues.hasOwnProperty(key)) {
                summary += initValues[key];
            }
        }
        return summary;
    }

    getOwnState() {
        return {
            summary: this.computeSummary(),
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
    
    render() {
        return (
            <div>
                <span>summary: {this.state.summary}</span>
            </div>
        )
    }
}

Summary.contextTypes = {
    store: PropTypes.object
}

export default Summary;