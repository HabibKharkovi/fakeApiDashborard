import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './userInfo.css'


class UserInfo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dashboard-main">
                <div className="row">
                    <div className="col-md-3">
                        <div className="profile-box mb-5">
                            <div className="member-profile">
                                <div className="profile-pic">
                                    <img src="images/sadaqat-img.jpeg"/>
                                    <span className="upload-photo">
                                        <i className="fa fa-camera" aria-hidden="true"></i>
                                        Upload New
                                    </span>
                                </div>
                                {this.props.user.map(user => 
                                    <div className="bio">
                                        <a href="#" className="profile-name">{user.name}</a>
                                        <span className="">{user.email}</span>
                                    </div>
                                )}
                            </div>
                            <ul className="social-login">
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-google-plus"></a></li>
                            </ul>
                        </div> 
                        <div className="about-box">
                            <div className="about-head">
                                <span><i className="fa fa-user" aria-hidden="true"></i>About</span>
                                <span className="profile-complete">77%</span>
                            </div>
                            <ul>
                                <li><a href="#"><i className="fa fa-exchange" aria-hidden="true"></i><span>Change Profile avatar</span></a></li>
                                <li><a href="#"><i className="fa fa-lock" aria-hidden="true"></i><span>Change Password</span></a></li>
                                <li><a href="#"><i className="fa fa-pencil" aria-hidden="true"></i><span>Edit</span></a></li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-md-9">
                        <div className="edit-box">
                            <div className="edit-head">
                                <span>Edit</span>
                                <span className="Edit-icon"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                            </div>
                            <div className='userInfo'>
                               {this.props.user.map(user => 
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Name: </span><span>{user.name}</span></li>
                                    <li class="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Username: </span><span>{user.username}</span></li>
                                    <li class="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Phone Number: </span><span>{user.phone}</span></li>
                                    <li class="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Email: </span><span>{user.email}</span></li>
                                    <li class="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Website: </span><span>{user.website}</span></li>
                                    <li class="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Company: </span><span>{`${user.company.name} ${user.company.catchPhrase} `}</span></li>
                                    <li class="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Address: </span><span>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</span></li>
                                </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserInfo;