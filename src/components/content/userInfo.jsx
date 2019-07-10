import React, { Component } from 'react';
import './userInfo.css'


class UserInfo extends Component {
    state = {
        edit: 'false'
      }

    handleEdit = e => {
        this.setState({
            edit: 'true'
        });
    }

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
                                    <div className="bio" key={user.id}>
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
                        {/* <div className="about-box">
                            <div className="about-head">
                                <span><i className="fa fa-user" aria-hidden="true"></i>About</span>
                                <span className="profile-complete">77%</span>
                            </div>
                            <ul>
                                <li><a href="#"><i className="fa fa-exchange" aria-hidden="true"></i><span>Change Profile avatar</span></a></li>
                                <li><a href="#"><i className="fa fa-lock" aria-hidden="true"></i><span>Change Password</span></a></li>
                                <li><a href="#"><i className="fa fa-pencil" aria-hidden="true"></i><span>Edit</span></a></li>
                            </ul>
                        </div>  */}
                    </div>
                    <div className="col-md-9">
                        <div className="edit-box">
                            <div className="edit-head">
                                <button className="btn-primary btn" onClick={(e) => this.handleEdit(e)}>Edit</button>
                                <span className="Edit-icon"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                            </div>
                            {this.state.edit === 'false'?
                            <div className='userInfo'>
                               {this.props.user.map(user => 
                                <ul className="list-group list-group-flush" key={user.id}>
                                    <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Name: </span><span>{user.name}</span></li>
                                    <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Username: </span><span>{user.username}</span></li>
                                    <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Phone Number: </span><span>{user.phone}</span></li>
                                    <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Email: </span><span>{user.email}</span></li>
                                    <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Website: </span><span>{user.website}</span></li>
                                    <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Company: </span><span>{`${user.company.name} ${user.company.catchPhrase} `}</span></li>
                                    <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Address: </span><span>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</span></li>
                                </ul>
                                )}
                            </div>
                            :
                            <div>
                                 {this.props.user.map(user => 
                                    <form onSubmit={(e) => this.props.handleEdit(e, user)} key={user.id}>
                                        <legend>Personal Information</legend>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" name="name" onChange={() => this.props.handleChange()} value={user.name} placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Username</label>
                                            <input type="text" className="form-control" name='username' onChange={() => this.props.handleChange()} value={user.username} placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Phone Number</label>    
                                            <input type="text" className="form-control" name="phoneNumber" onChange={() => this.props.handleChange()} value={user.phone} placeholder="Phone Number"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="email" className="form-control" name="email" onChange={() => this.props.handleChange()} value={user.email} placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Website</label>
                                            <input type="text" className="form-control" name="website" onChange={() => this.props.handleChange()} value={user.website} placeholder="Website"/>
                                        </div>
                                        <fieldset>
                                            <legend>Company Information</legend>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Company Name</label>
                                                <input type="text" className="form-control" name="company" onChange={() => this.props.handleChange()} value={user.company.name} placeholder="Company Name"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Company Catch Phrase</label>
                                                <input type="text" className="form-control" name="company" onChange={() => this.props.handleChange()} value={user.company.catchPhrase} placeholder="Company Catch Phrase"/>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend>Address</legend>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Street</label>
                                                <input type="text" className="form-control" onChange={() => this.props.handleChange()} value={user.address.street} placeholder="Street"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Suite</label>
                                                <input type="text" className="form-control" onChange={() => this.props.handleChange()} value={user.address.suite} placeholder="Suite"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">City</label>
                                                <input type="text" className="form-control" onChange={() => this.props.handleChange()} value={user.address.city} placeholder="City"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">zip code</label>
                                                <input type="text" className="form-control" onChange={() => this.props.handleChange()} value={user.address.zipcode} placeholder="zip code"/>
                                            </div>
                                        </fieldset>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </form>
                                )}

                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserInfo;