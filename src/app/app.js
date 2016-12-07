import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import Main from './containers/main' // Our custom react component
import configureStore from './configureStore'
import {login} from './actions/indexAction'
import Overview from './components/Overview';
import Alerts from './components/Alerts';
import Setting from './components/Setting';
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

const store = configureStore()
// console.log(store.getState())
store.dispatch(login())
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} >
            <Route path="/" component={Main} >
                <IndexRoute component={Overview} />
                <Route path="/alerts" component={Alerts} />
                <Route path="/setting" component={Setting} />
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);
