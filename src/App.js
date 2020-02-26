import React from 'react';
import './App.scss';
import './Constants.scss';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
      <Router>
            <div className="App">
          <h1 className="logo">MyFace</h1>
              
              <Switch>
                  <Route path="/posts">
                          {/*<PostsPage/>*/}
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