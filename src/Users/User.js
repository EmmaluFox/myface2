import React, {useEffect, useState} from "react";
import {ApiPostsReader, ApiUsersReader} from "../Components/ApiReaders";
import {Components as users} from "../components";


export function User(props){
    return(
        <div >
            <div>{ApiUsersReader()}</div>

        </div>
    )}