import React, { Component } from 'react';
import { Link } from "react-router-dom";


class RightSideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="team-bar">
                <div class="team-head">
                    <input type="search" class="form-control ds-input" id="search-input" placeholder="Search"/>
                </div>
                <ul class="team-list show" id="team-list">
                    {this.props.users.map( user => 
                        <li onClick={() => this.props.handleUsers(user)}>
                            <div class="team-member">
                                <span class="dot"></span>
                                <div class="member-img">
                                    <img src="images/member-icon.png"/>
                                </div>
                                <h5 class="member-name">{user.name}</h5>
                                <span class="member-status">{user.email}</span>
                            </div>
                        </li>
                        )} 
                </ul>
            </div>
         );
    }
}
 
export default RightSideBar;