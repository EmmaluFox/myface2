import React from "react";
import Components, {Components as users} from "../components";
import {ApiPostsReader, ApiUsersReader} from "./ApiReaders";

export default props => (
    <div className="username">
        <hr />
        <h2>{ApiUsersReader(users)}</h2>
    </div>
);