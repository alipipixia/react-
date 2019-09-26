// import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/index.css';
// import registerServiceWorker from './registerServiceWorker';

class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
    }
    select(e){
        // debugger
        console.log(e.target.innerHTML)
        this.props.handleSelected(e.target.getAttribute('id'));
    }
    componentDidMount() {
        const dom = document.querySelector('#listItemsC');
        dom.addEventListener('click',this.select,false);
    }
    render() {
        const resultItems = this.props.data;
        const listItems = resultItems.map((item) =>
            <li key={item.id} id={item.id}>
                {item.name}
            </li>
        );
        return (
            <ul id="listItemsC">{listItems}</ul>
        );
    }
}

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null
        };
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(id){
        this.props.handleSelected(id);
    }

    componentWillReceiveProps(nextProps) {
        let arr1 = [{
                id:'1',
                name: 'a'
            }, {
                id: '2',
                name: 'ab'
            },{
                id: '3',
                name: 'abc'
            },{
                id: '4',
                name: 'abcd'
            }];
        let arr2 = [{
            id: '1',
            name: 'b'
        }, {
            id: '2',
            name: 'bb'
        }, {
            id: '3',
            name: 'bbb'
        }, {
            id: '4',
            name: 'bbbb'
        }];

        let arr3 = [{
            id: '1',
            name: 'c'
        }, {
            id: '2',
            name: 'cc'
        }, {
            id: '3',
            name: 'ccc'
        }, {
            id: '4',
            name: 'ccc'
        }];

        if (nextProps.searchText === 'a'){
            this.setState({ loading: false, data: arr1 });
        } else if (nextProps.searchText === 'b') {
            this.setState({ loading: false, data: arr2 });
        } else {
            this.setState({ loading: false, data: arr3 });
        }
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <SearchResultList data={this.state.data} handleSelected={this.handleSelected}/>
                </div>
            );

        }
        else {
            return (
                <div></div>
            );
        }
    }
}

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
    }

    handleSearchTextInputChange(e) {
        this.props.onSearchTextInput(e.target.value);
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.searchText}
                    onChange={this.handleSearchTextInputChange}
                />
            </form>
        );
    }
}

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };

        this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSearchTextInput(searchText) {
        this.setState({
            searchText: searchText
        });
    }
    handleSelected(id) {
        console.log(id);
    }

    render() {
        return (
            <div>
                <SearchInput
                    searchText={this.state.searchText}
                    onSearchTextInput={this.handleSearchTextInput}
                />
                <SearchResult
                    searchText={this.state.searchText}
                    handleSelected={this.handleSelected}
                />
            </div>
        );
    }
}


ReactDOM.render(
    <SearchBox />,
    document.getElementById('root')
);
// registerServiceWorker();
