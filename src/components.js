import React from "react";
import {ApiPostsReader, ImageUrl, Message} from "./Components/ApiReaders";
import PostedBy from './Components/PostedBy';


let Id;
let PostedAt;

const Components = {
    postedBy: PostedBy,
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