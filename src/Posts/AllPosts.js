import React, {useEffect, useState} from "react";
import {ApiReader} from "../Components/ApiReader";


function AllPosts(props) {
    
    
    return (
        <h2 className="App-header">
            All Posts
            {ApiReader(props.postedBy)}
        </h2>
    )
        ;
    
}

export {AllPosts};
