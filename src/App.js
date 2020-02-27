import React from 'react';
import './App.scss';
import './Constants.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import {AllPosts} from "./Posts/AllPosts";
import {Post} from "./Posts/Post";
import {AllUsers} from "./Users/AllUsers";
import {Users} from "./Users/Users";

function App() {
  return (
      <Router>
        <div className="App">
            <Link className="logo" to="./"><h1>MyFace</h1></Link>
            <div className="navBar">
                <NavLink className="navLink" to="/posts">Posts</NavLink>
                <NavLink className="navLink" to="/users">Users</NavLink>
            </div>
            <Switch>
                <Route path="/posts">
                    <div className="page-container">
                        <AllPosts/>
                        <Post className="postContainer"/>
                    </div>
                </Route>
                <Route path="/users">
                    <div className="page-container">
                        <AllUsers/>
                        <Users/>
                    </div> 
                </Route>
            </Switch>
        </div>
      </Router>
  );
}
    
export default App;