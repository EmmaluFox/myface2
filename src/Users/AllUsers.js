import React, {useEffect, useState} from "react";
import {Users} from "./Users";
import {NavLink} from "react-router-dom";
function AllUsers(users) {

    return (
        <div className="page-container">
        <header className="App-header">All Users</header>
            <NavLink className="newUserLink" to="/users/new">New User</NavLink>
        <Users/>
        </div>
    )
        ;

}

export {AllUsers};