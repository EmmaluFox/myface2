import React, {useEffect, useState} from "react";
import {ApiPostsReader, ApiUsersReader} from "../Components/ApiReaders";
import PostedBy from "../Components/PostedBy";
import UserName from "../Components/UserName";


export function Users(props){
    return(
        <div >
            <div>{ApiUsersReader(UserName(props))}</div>

        </div>
    )}