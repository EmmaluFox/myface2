import React, {useEffect, useState} from "react";
import {Users} from "./Users";
import {NavLink, Switch} from "react-router-dom";
import {NewUser} from "./NewUser";
function AllUsers(users) {

    return (
        <div className="page-container">
        <header className="App-header">All Users</header>
            <NavLink className="newUserLink" to="/users/new">New User</NavLink>
            <Switch>
                <NewUser path="/users/new"/>
            </Switch>
        <Users/>
        </div>
    )
        ;

}

export {AllUsers};