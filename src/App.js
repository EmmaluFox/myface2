import React from 'react';
import './App.scss';
import './Constants.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import {AllPosts} from "./Posts/AllPosts";

function App() {
  return (
      <Router>
            <div className="App">
          <Link className="logo" to="./"><h1>MyFace</h1></Link>
              <NavLink className="navLink" to="/posts">Posts</NavLink>
              <Switch>
                  <Route path="/posts">
                         <AllPosts/>
                  <div className="all-posts-container">
                      <header className="App-header">
                          All Posts
                      </header>
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