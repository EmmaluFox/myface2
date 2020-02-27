import React, {useEffect, useState} from "react";
import {ApiReader} from "../Components/ApiReader";
import PostedBy from "../Components/PostedBy";
import {Components as posts} from "../components";


export function Post(props){
    

return(
    <div >
    <div>{ApiReader(PostedBy(props))}</div>
        
    </div>
)}
