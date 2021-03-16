import React, { useState } from "react";
import "./Filter.css";
import FilterHandler from "../../filterhandler";

function Filter(props) {
    const [userInput, setUserInput] = useState(FilterHandler.currentFilter);

    function onInputChange(e) {
        const input = e.currentTarget.value;
        setUserInput(input);
        FilterHandler.changeFilter(input);
        props.onFilterChange(input);
    }

    return (
        <div className="input-group input-group-lg filter-container">
            <input type="text" className="form-control filter-input" value={userInput} onChange={onInputChange} placeholder="Etsi" />
            <div className="input-group-append">
                <span className="input-group-text">
                    <i className="material-icons">search</i>
                </span>
            </div>
        </div>
    );
}

export default Filter;
