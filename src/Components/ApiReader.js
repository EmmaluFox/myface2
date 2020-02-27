import React, {useEffect, useState} from "react";
import Components from "../components";﻿


export function ApiReader(posts) {
        const [data, setData] = useState([]);
        useEffect(() => {
            fetch('https://localhost:5001/posts')
                .then(response => response.json())
                .then(jsonData => {
                    setData(jsonData.items)
                });
        }, []);


    return (
        <div>
            {data.map(posts => Components(posts))}
        </div>
    );
}

 