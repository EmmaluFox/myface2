import React from 'react';
import './App.scss';
import './Constants.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import {AllPosts} from "./Posts/AllPosts";
import {Post} from "./Posts/Post";

function App() {
  return (
      <Router>
            <div className="App">
          <Link className="logo" to="./"><h1>MyFace</h1></Link>
              <NavLink className="navLink" to="/posts">Posts</NavLink>
              <Switch>
                  <Route path="/posts">
                  <div className="all-posts-container">
                      <AllPosts/>
                      <Post/>
                  </div>
                  </Route>
                  
                  <Route path="/users">
                      <div className="all-users-container">
                          <header className="App-header">
                              All Users
                          </header>
                      </div> 
                  </Route>
              
      </Switch>
          </div>
      </Router>
  );
}
    export default App;