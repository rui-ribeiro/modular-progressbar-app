import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import App from './components/App';
import Home from './components/Home';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import {store} from './modules/store'

const BasicExample = () => (
    <Router>
        <Provider store={store}>
            <div className="ui two column centered grid">
                <div className="column">
                    <Link to='/'>Home </Link>
                    <Route exact path='/app1' component={App}/>
                    <Route exact path="/" component={Home}/>
                </div>
            </div>
        </Provider>
    </Router>
)

ReactDOM.render(
    <BasicExample/>,
    document.getElementById('root')
);

serviceWorker.unregister();
