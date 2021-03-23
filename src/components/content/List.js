import React from "react";
import "./List.css"
function List({ src }) {
    return (
        <ul>
            {src.map((item, i) => {
                return <li key={i} className="li-item">{item}</li>;
            })}
        </ul>
    );
}

export default List;
