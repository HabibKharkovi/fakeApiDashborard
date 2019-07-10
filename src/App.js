import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import LeftSideBar from './components/leftSidebar';
import UserInfo from './components/content/userInfo';
import Posts from './components/content/posts';
import Todo from './components/content/todo';
import Albums from './components/content/albums';
import Album from './components/content/album';
import MainContent from './components/content/maincontent';
import Post from './components/content/post';
import RightSideBar from './components/rightSidebar';
import { Route } from "react-router-dom";

class Dashboard extends Component {
  state = { 
    users: [],
    posts: [],
    allAlbums: [],
    userAlbums: [],
    comments: [],
    singlePost: [],
    singlePostComments: [],
    allTodos: [],
    userTodos: [],
    allPhotos: [],
    albumPhotos: [],
    user: [],
    userPosts: [],
    fiterMember: [],
    name: '',
    email: '',
    username: '',
    website: '',
   }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts }))

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => this.setState({ comments }))

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(allAlbums => this.setState({ allAlbums }))

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(allPhotos => this.setState({ allPhotos }))

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(allTodos => this.setState({ allTodos }))

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ users }))

  }

  handleUser = user => {
    const userInfo = this.state.users.filter(i => i.id == user.id);
    const userPosts = this.state.posts.filter(i => i.userId == user.id);
    const userAlbums = this.state.allAlbums.filter(i => i.userId == user.id);
    const userTodos = this.state.allTodos.filter(t => t.userId == user.id);
    this.setState({ user: userInfo, userPosts, userAlbums, userTodos })
  }

  handleSinglePost = post => {
    const singlePost = this.state.userPosts.filter(p => p.id == post.id);
    const comments = this.state.comments.filter(c => c.postId == post.id);
    this.setState({ singlePost, singlePostComments: comments })
  }

  handleAlbumPhotos = album => {
     const albumPhotos = this.state.allPhotos.filter(ph => ph.albumId == album.id);
     this.setState({ albumPhotos })
  }

  searchMemeber = e => {
    console.log(e.target.value )
  }

  handleChange = e => {
    this.setState({
      this.target.name: this.target.value
    })
  }

  handleEdit = (e, user) => {
    e.preventDefault();
    console.log(user.id);
  }

  // searchMemeber = e => {
  //   this.setState({
  //     fiterMember: e.target.value
  //   }, () => {
  //     if (this.state.fiterMember && this.state.fiterMember.length > 1) {
  //       if (this.state.fiterMember.length % 2 === 0) {
  //         this.getInfo()
  //       }
  //     } else if (!this.state.fiterMember) {
  //     }
  //   })
  // }

  render() { 
    return ( 
      <div className='wrapper'>
       <Header/>
       <div className='content'>
          <div className='profile-wrap'>
            <LeftSideBar user={this.state.user}/>
            <Route exact path={"/"} component={() => <MainContent/>}/>
            <Route path={"/userinfo"} component={() => 
            <UserInfo user={this.state.user} handleEdit={this.handleEdit} hangleChange={this.handleChange}/>}/>
            <Route path={"/posts"} component={() => <Posts posts={this.state.userPosts} handleSinglePost={this.handleSinglePost}/>}/>
            <Route path={"/albums"} component={() => <Albums albums={this.state.userAlbums} handleAlbumPhotos={this.handleAlbumPhotos}/>}/>
            <Route path={"/album"} component={() => <Album albumPhotos={this.state.albumPhotos} />}/>
            <Route path={"/post"} component={() => <Post post={this.state.singlePost} comments={this.state.singlePostComments}/>}/>
            <Route path={"/todos"} component={() => <Todo todos={this.state.userTodos} />}/>
            <RightSideBar users={this.state.users} handleUsers={this.handleUser} searchMemeber={this.searchMemeber}/>
          </div>
       </div>
    </div>
     );
  }
}
 
export default Dashboard;

