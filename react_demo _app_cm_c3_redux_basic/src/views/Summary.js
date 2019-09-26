import React, { Component } from 'react';
import store from '../Store';

class Summary extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    computeSummary() {
        const initVaules = store.getState(); 
        let summary = 0;
        for (const key in initVaules) {
            if (initVaules.hasOwnProperty(key)) {
                summary += initVaules[key];
            }
        }
        return summary;
    }

    getOwnState() {
        return {
            summary : this.computeSummary(),
        }
    }

    onChange() {
        this.setState(this.getOwnState);
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        const summary = this.state.summary;
        return (
            <div>
                <span>summary: {summary}</span>
            </div>
        )
    }

}

export default Summary;