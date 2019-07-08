import React, { Component } from 'react';

class Post extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="dashboard-main">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-5">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush mt-3">
                            <h6 className='ml-3'>Comments</h6>
                            <li className="list-group-item">
                                <div className="font-weight-bold">Name: <span className="font-weight-normal">asdf</span></div>
                                <small className="font-weight-bold">Email: <span className="font-weight-normal">asd</span></small>
                                <div className="pt-2">asdfsdaf</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Post;