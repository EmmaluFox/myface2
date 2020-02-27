import React from "react";
import {ApiReader, ImageUrl, Message} from "./Components/ApiReader";
import UserName from './Components/UserName';
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