import React ,{Component} from 'react';
import store from '../Store';

class Summary extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.computeSummary = this.computeSummary.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    computeSummary() {
        const initValues = store.getState();
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
        store.subscribe(this.onChange);
    }
    
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
    
    render() {
        return (
            <div>
                <span>summary: {this.state.summary}</span>
            </div>
        )
    }
}

export default Summary;