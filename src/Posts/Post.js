import React, {useEffect, useState} from "react";
import {ApiPostsReader} from "../Components/ApiReaders";
import PostedBy from "../Components/PostedBy";
import {Components as posts} from "../components";


export function Post(props){
    

return(
    <div >
    <div>{ApiPostsReader(PostedBy(props))}</div>
        
    </div>
)}
