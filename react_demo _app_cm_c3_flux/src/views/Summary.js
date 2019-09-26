import React, {Component} from 'react';
import SummaryStore from '../stores/SummaryStore';

class Summary extends Component {  
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);

        this.state = {
            summary: SummaryStore.getSummary(),
        }
    }

    onUpdate() {
        this.setState({
            summary: SummaryStore.getSummary(),
        })
    }

    componentDidMount() {
        SummaryStore.addEventListener(this.onUpdate);
    }
    componentWillUnmount() {
        SummaryStore.removeEventListener(this.onUpdate);
    }

    render() {
        return (
            <div>
                <span>summary: {this.state.summary} </span>
            </div>
        )
    }
}

export default Summary;