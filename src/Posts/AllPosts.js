import React from "react";


function AllPosts(props) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let postList = [];
    fetch("https://localhost:5001/posts", requestOptions)
        .then(response => response.items.map((value, index, array) => (this.value,this.index,postList[this.index])))
        .then(result => postList.push(result))
        .catch(error => console.log('error', error));
    
    return (
        <h2 className="App-header">
            All Posts
            {postList.length}
        </h2>
    )
        ;
    
}

export {AllPosts};
