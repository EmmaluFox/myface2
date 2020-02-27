import React from "react";
import {ApiReader} from "./ApiReader";
import {Components as posts} from "../components";

export default props => (
    <div className="postedBy">
        <hr />
        <h2>{ApiReader(posts.postedBy)}</h2>
    </div>
);