import React from "react";
import {fetchApi} from "../API/API";

function AllPosts(props) {
    return (
        <h2 className="App-header">
            All Posts
            {fetchApi("https://localhost:5000/")}
        </h2>
    )
        ;
    
}
export {AllPosts};
