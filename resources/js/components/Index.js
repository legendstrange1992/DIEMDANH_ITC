import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RedirectURL from '../router/RedirectURL';
import Login from './Login';
import Diemdanh from './Diemdanh';
import Lopdangday from './Lopdangday';
export default class Index extends Component {
    
    render() {
        return (
            <div>
                <Login/>
            </div>
        );
    }
}


