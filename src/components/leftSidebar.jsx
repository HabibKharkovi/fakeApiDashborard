import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LeftSideBar extends Component {
    state = {  }
    render() { 
        return (
            <div className="profile-sidebar">
                {/* <span className="profileToggle">
                    <i className="fa fa-file-text" aria-hidden="true"></i>
                </span> */}
                <div className="admin-profile">
                    <div className="profile-pic">
                        <img src="images/sadaqat-img.jpeg"/>
                        <span className="upload-photo">
                            <i className="fa fa-camera" aria-hidden="true"></i>
                            Upload New
                        </span>
                    </div>
                    {this.props.user.map(info => 
                        <div className="bio" key={info.id}>
                            <span className="profile-name">{info.name}</span>
                            <span className="status">{info.email}</span>
                        </div>
                    )}
                </div>
                <div className="more-options">
                    <ul>
                        <li><Link to='/userinfo'><i className="fa fa-users" aria-hidden="true"></i><span>User Info</span></Link></li>
                        <li><Link to='/posts'><i className="fa fa-cogs" aria-hidden="true"></i><span>Posts</span></Link></li>
                        <li><Link to='/albums'><i className="fa fa-envelope-o" aria-hidden="true"></i><span>Albums</span></Link></li>
                        <li><Link to='/todos'><i className="fa fa-wrench" aria-hidden="true"></i><span>Todos</span></Link></li>
                        <li><Link to='/post'><i className="fa fa-wrench" aria-hidden="true"></i><span>Comments</span></Link></li>

                        {/* <li className="logOut"><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></a></li> */}
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default LeftSideBar;