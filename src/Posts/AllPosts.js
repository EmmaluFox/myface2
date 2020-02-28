import React, {useEffect, useState} from "react";
import {Post} from "./Post";
function AllPosts(posts) {
    
    return (
        <div className="page-container">
        <header className="App-header">All Posts</header>
        <Post className="postContainer"/>
        </div>
    )
        ;
    
}

export {AllPosts};
