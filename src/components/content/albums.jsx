import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Albums extends Component {
    state = {  }
    render() { 
        console.log(this.props.albums);
        return ( 
        <div className="dashboard-main">
            <h3 class="mb-3 pl-2">Albums</h3>
            <div className="row">
                {this.props.albums.map(album => 
                    <div className="col-sm-3 m-2 d-flex" key={album.id}>
                        <Link to='/album' className="p-4 d-flex border border rounded text-dark border-secondary">
                           {album.title}
                        </Link>
                    </div>
                )}
            </div>
        </div>
         );
    }
}
 
export default Albums;