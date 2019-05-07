import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';
import Login from '../components/Login';
import Diemdanh from '../components/Diemdanh';
import Lopdangday from '../components/Lopdangday';
class RedirectURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/"  component={Lopdangday} />
                <Route exact path="/lop-dang-day" component={Lopdangday} />
                <Route exact path="/diem-danh" component={Diemdanh} />
            </div>
        );
    }
}

export default RedirectURL;