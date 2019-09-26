import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import store from './Store'
// import App from 'pages/home/App';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp'
//import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <TodoApp></TodoApp>
    </Provider>, 
    document.getElementById('root')
);

//registerServiceWorker();
