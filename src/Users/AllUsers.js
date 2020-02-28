import React, {useEffect, useState} from "react";
import {Users} from "./Users";
function AllUsers(users) {

    return (
        <div className="page-container">
        <header className="App-header">All Users</header>
        <Users/>
        </div>
    )
        ;

}

export {AllUsers};