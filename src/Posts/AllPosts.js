import React, {Component, ReactChildren as post, useEffect, useState} from "react";
import {scryRenderedDOMComponentsWithTag} from "react-dom/test-utils";
import Components from "../components";


function AllPosts(props) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://localhost:5001/posts')
            .then(response => response.json())
            .then(jsonData => {
                setData(jsonData.items)
            });
    }, []);
    


    
    return (
        <h2 className="App-header">
            All Posts

            {data.map(posts => Components(posts))}
        </h2>
    )
        ;
    
}

export {AllPosts};
