import React, { useState } from 'react';
import Server from "../../server";
import "./Course.css";
import { useHistory, useParams } from 'react-router-dom';
import BuyButton from '../buybutton/BuyButton';

const Course = () => {
    const params = useParams();
    const course = Server.getCourse(params.id.substring(1));
    const episodes = Server.getEpisodes(course.id);
    const user = Server.getUser();
    const history = useHistory();
    const [trial, setTrial] = useState(user.freeTrial);

    function endTrial() {
        Server.setUserTrial(false)
        setTrial(false)
    }

    return (
        [
        <div key="title" className="page-title">
            <div className="title-left-absolute-icon clickable" onClick={() => history.push('/')}>
                <i className="material-icons">arrow_back</i>
            </div>
            <h1>{course.title}</h1>
        </div>,
        <div key="content" className="content-container">
            <img src={course.img} className="card-img-top" alt=""></img>
            <div className="card-buy-button">
                <BuyButton course={course} trial={trial} endTrial={endTrial}/>
            </div>
            
            <p className="description">{course.description}</p>
            <ul className="list-group">
                {
                    episodes.map(episode => {
                        return (
                        <li key={episode.id} className="list-group-item">
                            <p className="m-0">{"Jakso " + episode.episodeNumber + ": " + episode.title}</p>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                if (user.owned.indexOf(course.id) === -1) {
                                    alert("Et omista kurssia");
                                } else {
                                    history.push('/course/content:' + episode.id)
                                }
                            }
                            }>Aloita</button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
        ]
    )
}

export default Course;