import React from "react";
import {ApiPostsReader} from "./ApiReaders";
import {Components as posts} from "../components";
import UserName from "./UserName";


let Id;
let FirstName;
let LastName;
let DisplayName;
let Email;
let ProfileImageUrl;
let CoverImageUrl;

const PostedBy = {
    id: Id,
    firstName: FirstName,
    lastName: LastName,
    displayName: DisplayName,
    username: UserName,
    email: Email,
    profileImageUrl: ProfileImageUrl,
    coverImageUrl: CoverImageUrl
};
export default props => (
    <div className="postedBy">
        <hr />
        <h2>{ApiPostsReader(posts)}</h2>
    </div>
);