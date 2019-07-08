import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    state = {}
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-6">
                            <div className="logo">
                                <Link href="./index.html">
                                    <h2>Dashboard</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-6">
                            <div className="account-btns text-right">
                                <span className="btn-search"><i className="fa fa-search" aria-hidden="true"></i></span>
                                <Link href="#" className="btn acount-btn">My Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
                );
           }
       }
        
export default Header;