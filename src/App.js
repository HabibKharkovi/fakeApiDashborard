import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import LeftSideBar from './components/leftSidebar';
import UserInfo from './components/content/userInfo';
import Posts from './components/content/posts';
import Todo from './components/content/todo';
import Albums from './components/content/albums';
import Post from './components/content/post';
import RightSideBar from './components/rightSidebar';
import { Route } from "react-router-dom";

class Dashboard extends Component {
  state = { 
    users: [],
    posts: [],
    albums: [],
    comments: [],
    todos: [],
    photos: [],
    user: [],
    userPosts: []
   }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ users }))

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts }))

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => this.setState({ comments }))

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => this.setState({ albums }))

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => this.setState({ photos }))

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => this.setState({ todos }))
  }

  handleUser = user => {
    const userInfo = this.state.users.filter(i => i.id == user.id);
    const userPosts = this.state.posts.filter(i => i.userId == user.id);
    this.setState({ user: userInfo, userPosts })
  }

  render() { 
    return ( 
      <div className='wrapper'>
       <Header/>
       <div className='content'>
          <div className='profile-wrap'>
            <LeftSideBar user={this.state.user}/>
            <Route exact path={"/userinfo"} component={() => <UserInfo user={this.state.user}/>}/>
            <Route path={"/posts"} component={() => <Posts posts={this.state.userPosts}/>}/>
            <Route path={"/todos"} component={() => <Todo/>}/>
            <Route path={"/albums"} component={() => <Albums/>}/>
            <Route path={"/post"} component={() => <Post/>}/>
            <RightSideBar users={this.state.users} handleUsers={this.handleUser}/>
          </div>
       </div>
    </div>
     );
  }
}
 
export default Dashboard;

