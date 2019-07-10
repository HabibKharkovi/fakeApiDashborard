import React, { Component } from 'react';

class Album extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dashboard-main">
                <div className="row">
                    {this.props.albumPhotos.map(photo => 
                       <div className="col-sm-3 mb-4" key={photo.id}>
                            <div className="card">
                                <img src={photo.url} className="card-img-top" alt={photo.title}/>
                                <div className="card-body">
                                    <h4 className="card-text">{photo.title}</h4>
                                </div>
                            </div>
                       </div> 
                    )}
                </div>
            </div>
         );
    }
}
 
export default Album;