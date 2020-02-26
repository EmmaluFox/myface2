import React from "react";
import Components from "../components";

export default props => (
    <div className="username">
        <hr />
        <h2>{props.username()}</h2>
    </div>
);