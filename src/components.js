import React from "react";
import {ApiPostsReader, ImageUrl, Message} from "./Components/ApiReaders";
import PostedBy from './Components/PostedBy';
import {Users} from "./Users/Users";


let Id;
let PostedAt;

const Components = {
    postedBy: PostedBy,
    users: Users,
    likes: [],
    dislikes: [],
    id: Id,
    message: Message,
    imageUrl: ImageUrl,
    postedAt: PostedAt
    
};
export {Components};
export default posts => {
    if (typeof Components[posts.component] !== "undefined") {
        return React.createElement(Components[posts.component], {
            key: posts.key,
            posts: posts.component
        });
    }
}