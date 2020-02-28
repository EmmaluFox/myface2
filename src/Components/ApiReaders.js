import React, {useEffect, useState} from "react";

export function ApiPostsReader() {
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

export function ApiUsersReader() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://localhost:5001/users')
            .then(response => response.json())
            .then(jsonData => {
                setUsers(jsonData.items)
            });
    }, []);

    return (
        <div className="usersContainer">
            {users.map(user => <User userData={user}/>)}
        </div>
    );
}

export function Post(props) {
    return (
        <div className="singleEntry">{props.data.message}
            {props.data.id}
            <img className="post-image" alt="post-image" src={props.data.imageUrl}/>
        </div>
    );
}

export function User(props) {
    return (
        <div className="singleEntry">
            {props.userData.id} : {props.userData.displayName} 
            <img className="profile-image" alt="profile-image" src={props.userData.profileImageUrl}/>
        </div>
    );
}
        

 