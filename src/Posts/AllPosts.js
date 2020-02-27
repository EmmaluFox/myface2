import React, {useEffect, useState} from "react";
import {ApiReader} from "../Components/ApiReader";
import PostedBy from "../Components/PostedBy";


function AllPosts(posts) {
    
    return (
        <h2 className="App-header">
            {PostedBy(ApiReader)}
        </h2>
    )
        ;
    
}

export {AllPosts};
