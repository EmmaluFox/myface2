import React from "react";
import {ApiReader} from "./Components/ApiReader";
import UserName from './Components/UserName';
import PostedBy from './Components/PostedBy';


const Components = {
    username: UserName,
    postedBy: PostedBy,
};
export {Components};
export default posts => {
    if (typeof Components[posts.component] !== "undefined") {
        return React.createElement(Components[posts.component], {
            key: posts.postedBy,
            posts: posts
        });
         
    }
    
}