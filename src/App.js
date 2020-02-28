import React from 'react';
import './App.scss';
import './Constants.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import {AllPosts} from "./Posts/AllPosts";
import {Post} from "./Posts/Post";
import {AllUsers} from "./Users/AllUsers";
import {Users} from "./Users/Users";
import {NewUser} from "./Users/NewUser";

function App() {
  return (
      <Router>
        <div className="App">
            <Link className="logo" to="./">MyFace</Link>
            <div className="navBar">
                <NavLink className="navLink" to="/posts">Posts</NavLink>
                <NavLink className="navLink" to="/users">Users</NavLink>
            </div>
            <Switch>
                <Route path="/posts">
                        <AllPosts/>
                </Route>
                <Route path="/users">
                    <AllUsers/>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}
    
export default App;