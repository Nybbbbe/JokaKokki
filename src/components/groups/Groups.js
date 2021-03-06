import React from 'react';
import Server from "../../server";
import "./Groups.css";
import { useHistory } from 'react-router-dom';
import BuyButton from "../buybutton/BuyButton";

function Groups() {
    const groups = Server.getGroups();
    const history = useHistory();

    return (
        <>
        <div key={"title"} className="page-title">
            <h1>Valitse kategoria</h1>
        </div>
        <div className="grid-container">
            {groups.map(group => {
                return (
                    <div className="image-container" >
                        <div className="image" style={{backgroundImage: "linear-gradient(0deg, #00000088 30%, #ff4fff00 120%), url(" + group.img + ")"}}>
                            <div className="text-container">
                                <h1>{group.title}</h1>
                            </div>
                        </div>
                    </div>
                    
                )
            })} 
        </div>
        </>
    )
}

export default Groups;