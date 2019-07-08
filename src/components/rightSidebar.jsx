import React, { Component } from 'react';
import { Link } from "react-router-dom";


class RightSideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="team-bar">
                <div className="team-head">
                    <input type="search" className="form-control ds-input" id="search-input" placeholder="Search Member" onChange={(e) => this.props.searchMemeber(e)}/>
                </div>
                <ul className="team-list show" id="team-list">
                    {this.props.users.map( user => 
                        <li onClick={() => this.props.handleUsers(user)} key={user.id}>
                            <Link to="/userinfo">
                                <div className="team-member">
                                    <span className="dot"></span>
                                    <div className="member-img">
                                        <img src="images/member-icon.png"/>
                                    </div>
                                    <h5 className="member-name">{user.name}</h5>
                                    <span className="member-status">{user.email}</span>
                                </div>
                            </Link>
                        </li>
                        )} 
                </ul>
            </div>
         );
    }
}
 
export default RightSideBar;