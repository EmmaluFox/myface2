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
        <div>
            {users.map(user => <DisplayName userData={user}/>).sort((id) => id.min)}

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


export function DisplayName(props) {
    return (
        
        <div>
            <div className="userProfile">
                <li>{props.userData.id} {props.userData.displayName}</li>
            </div>
        </div>
    );
}
        

 