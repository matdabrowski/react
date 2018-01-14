import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import About from './component/About.jsx';
import Contact from './component/contact.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {createStore} from 'redux';
import {appReducers} from "./component/reducers/reducers.js";
import {Provider} from 'react-redux';

const store = createStore(appReducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);
