import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
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
    searchQuery: '',
    data: [],
    name: 'asdf asdf',
    edit: 'false'
   }

  async componentDidMount(){
    console.log("xxx")

    const {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const {data: comments} = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const {data: allAlbums} = await axios.get('https://jsonplaceholder.typicode.com/albums');
    const {data: allPhotos} = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const {data: allTodos} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({
      posts, comments, allAlbums, allPhotos, allTodos, users
    });

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

  handleChange = (e) => {
    // const data = { ...this.state.data };
    // data[input.name] = input.value;
    e.preventDefault();

    this.setState({
      name: e.target.value
    })
    console.log(this.state.name)
  }

  handleEdit = e => {
    const data = this.state.user;
    this.setState({
        edit: 'true',
        data
    });
  }

  searchMemeber = e => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  render() { 
    let filtered = []
    if(this.state.searchQuery){
       filtered = this.state.users.filter(m =>
        m.name.toLowerCase().startsWith(this.state.searchQuery.toLowerCase())
      );
    } else {
      filtered = this.state.users
    }

    return ( 
      <div className='wrapper'>
       <Header/>
       <div className='content'>
          <div className='profile-wrap'>
            <LeftSideBar user={this.state.user}/>
            <Route exact path={"/"} component={() => <MainContent/>}/>
            <Route path={"/userinfo"} component={() => 
            <UserInfo 
              edit={this.state.edit}
              name={this.state.name}
              user={this.state.user} 
              data={this.state.data}
              handleEdit={this.handleEdit} 
              handleChange={this.handleChange}/>
            }/>
            <Route path={"/posts"} component={() => <Posts posts={this.state.userPosts} handleSinglePost={this.handleSinglePost}/>}/>
            <Route path={"/albums"} component={() => <Albums albums={this.state.userAlbums} handleAlbumPhotos={this.handleAlbumPhotos}/>}/>
            <Route path={"/album"} component={() => <Album albumPhotos={this.state.albumPhotos} />}/>
            <Route path={"/post"} component={() => <Post post={this.state.singlePost} comments={this.state.singlePostComments}/>}/>
            <Route path={"/todos"} component={() => <Todo todos={this.state.userTodos} />}/>
            <RightSideBar 
              users={filtered} 
              handleUsers={this.handleUser} 
              searchMemeber={this.searchMemeber}
            />
          </div>
       </div>
    </div>
     );
  }
}
 
export default Dashboard;