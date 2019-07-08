import React, { Component } from 'react';

class Post extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="dashboard-main">
            <div className="row">
                <div className="col-12">
                        <div className="card" >
                            {this.props.post.map(post => 
                                <div className="card-body p-5" key={post.id}>
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                </div>
                            )}
                            <ul className="list-group list-group-flush mt-3">
                                <h6 className='ml-3'>Comments</h6>
                                {this.props.comments.map(comment => 
                                    <li className="list-group-item" key={comment.id}>
                                        <div className="font-weight-bold">Name: <span className="font-weight-normal">{comment.name}</span></div>
                                        <small className="font-weight-bold">Email: <span className="font-weight-normal">{comment.email}</span></small>
                                        <div className="pt-2">{comment.body}</div>
                                    </li>
                                )}
                            </ul>
                        </div>    
                </div>
            </div>
        </div>
         );
    }
}
 
export default Post;