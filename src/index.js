import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Users from './users';
import NotFoundComponent from './NotFoundComponent';
import AddProject from './components/addProject.component';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/users" component={AddProject}></Route>
                <Route component={NotFoundComponent} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

