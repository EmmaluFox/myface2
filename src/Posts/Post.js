import React, {useEffect, useState} from "react";
import {ApiReader} from "../Components/ApiReader";
import PostedBy from "../Components/PostedBy";


export function Post(props){
    

return(
    <div>{PostedBy(ApiReader)}</div>
)}
