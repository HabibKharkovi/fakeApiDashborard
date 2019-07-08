import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./posts.css"

class Posts extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="dashboard-main posts">
            <div className="row">
                <div className="col-12">
                    <h3 className="font-weight-bold mb-3">Your Posts</h3>
                    <ul className="list-group list-group-flush">
                        {this.props.posts.map( post => 
                            <Link to="/post">
                                <li className="list-group-item p-5">
                                    <h4>{post.title}</h4> 
                                    <p>{post.body}</p> 
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Posts;