import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    render() {
        return (
                <div className="container" style={{ width: '60%' }}>
                    <div className="row">
                        <div className="col-12 logo">
                            <img src="images/logo-itc.png" width="100%" className="img-fluid" />
                        </div>
                    </div><div className="row">
                        <div className="col-12">
                            <div className=" alert alert-danger">
                                Email hoặc password không chính xác
                        </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-12">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput" >Email</label>
                                    <input type="email"name="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Mật Khẩu</label>
                                    <input type="password" name="password" className="form-control" />
                                </div>
                                <button className="btn btn-primary" >Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
        );
    }
}

export default Login;