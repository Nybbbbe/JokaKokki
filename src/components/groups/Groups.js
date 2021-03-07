import React, { useEffect } from 'react';
import Server from "../../server";
import VoiceControl from '../../voicecontrol'
import "./Groups.css";
import { useHistory } from 'react-router-dom';

function Groups() {
    const groups = Server.getGroups();
    const history = useHistory();

    const routeToGroup = (groupClass) => {
        history.push('/courses:' + groupClass);
    }

    return (
        <>
        <div key={"title"} className="page-title">
            <h1>Valitse kategoria</h1>
        </div>
        <div className="component-content-container">
            <div className="grid-container">
                {groups.map(group => {
                    return (
                        <div key={group.id} className="image-container" >
                            {VoiceControl.addTrackedElementId(group.id)}
                            <div id={group.id} className="image clickable" onClick={() => routeToGroup(group.class)} style={{backgroundImage: "linear-gradient(0deg, #00000088 30%, #ff4fff00 120%), url(" + group.img + ")"}}>
                                <div className="text-container">
                                    <h1>{group.title}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
        </>
    )
}

export default Groups;