import React from "react";
import UserName from './Components/UserName';
import PostedBy from './Components/PostedBy';


const Components = {
    username: UserName,
    postedBy: PostedBy,
};
export {Components};
export default posts => {
    // component does exist
    if (typeof Components[posts.component] !== "undefined") {
        return React.createElement(Components[posts.component], {
            key: posts.postedBy,
            posts: posts
        });
         
    }
    
}