import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import store from './Store';
import Provider from './Provider'
import ControlPannel from './views/ControlPannel';
import App from 'pages/home/App';
//import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<ControlPannel />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <ControlPannel></ControlPannel>
    </Provider>, 
    document.getElementById('root')
);
//registerServiceWorker();
