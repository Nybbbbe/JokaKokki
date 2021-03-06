import React, { useState } from 'react';
import Server from "../../server";
import "./Content.css";
import { useHistory, useParams } from 'react-router-dom';

const Content = () => {
    const params = useParams();
    const episode = Server.getEpisode(params.id.substring(1));
    // const [content, setContent] = useState(Server.getContent(parseInt(params.id.substring(1))));
    const history = useHistory();

    return (
        [
            <div key="title" className="page-title">
                <div className="title-left-absolute-icon clickable" onClick={() => history.push('/course:' + episode.parentId)}>
                    <i className="material-icons">arrow_back</i>
                </div>
                <h1>{episode.title}</h1>
            </div>,
        ]
    )
}

export default Content;