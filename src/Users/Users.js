import React from "react";
import {ApiUsersReader} from "../Components/ApiReaders";


export function Users(props){
    return(
        <div >
            <div>{ApiUsersReader(props)}</div>

        </div>
    )}