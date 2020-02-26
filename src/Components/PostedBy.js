import React from "react";
import Components from '../components';
export default props => (
    <div className="postedBy">
        <hr />
        <h2>{props.postedBy()}</h2>
    </div>
);