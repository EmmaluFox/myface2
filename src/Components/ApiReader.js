import React, {useEffect, useState} from "react";


export function ApiReader() {
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            fetch('https://localhost:5001/posts')
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
        <div>{props.data.message}</div>
    );
}

 