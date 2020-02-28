import React, {useEffect, useState} from "react";


export function PostReader(props) {
    const [posts, setPosts] = useState([]);
useEffect(() => {
        fetch("https://localhost:5001/posts")
            .then(response => response.json())
            .then(jsonData => {
                setPosts(jsonData.items)
            });
    }, []);
    return (
        <div>
            {posts.map(post => <Post data={post}/>)}
        </div>
    );
}

function Post(props) {
    return (
        <div className="itemContainer">
            {props.data.id}
            {props.data.message}
            {props.data.postedAt}
            <img alt="post-image" src={props.data.imageUrl}/>
        </div>
            
    );
}
