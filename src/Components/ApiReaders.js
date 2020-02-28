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
            {posts.map(post => <Message data={post}/>)}
            {posts.map(post => <ImageUrl data={post}/>)}
            {posts.map(post => <Id data={post}/>)}
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
        <div className="itemContainer">
            {users.map(user => <User userData={user}/>)}
        </div>
    );
}

export function Message(props) {
    return (
        <div>{props.data.message}</div>
    );
}

export function ImageUrl(props) {
    return (
        <img alt="post-image" src={props.data.imageUrl}/>
    );
}
export function Id(props) {
    return (
        <div>{props.data.id}</div>
    );
}


export function User(props) {
    return (
        <div className="user">
            {props.userData.id} : {props.userData.displayName} 
            <img className="profile-image" alt="profile-image" src={props.userData.profileImageUrl}/>
        </div>
    );
}
        

 