import React, { useState } from 'react';
import Server from "../../server";
import "./Course.css";
import VoiceControl from '../../voicecontrol';
import { useHistory, useParams } from 'react-router-dom';
import BuyButton from '../buybutton/BuyButton';
import ConfirmationModal from '../confirmationmodal/ConfirmationModal';
import ContentContainer from "../content/ContentContainer";

const Course = () => {
    const params = useParams();
    const course = Server.getCourse(params.id.substring(1));
    const episodes = Server.getEpisodes(course.id);
    const user = Server.getUser();
    const history = useHistory();
    const [trial, setTrial] = useState(user.freeTrial);
    const [showDenialModal, setShowDenialModal] = useState(false);

    function endTrial() {
        Server.setUserTrial(false)
        setTrial(false)
    }

    const closeDenialModal = () => {
        setShowDenialModal(false);
    }

    return (
        <>
            <div className="page-title">
                <div id="back" className="title-left-absolute-icon clickable" onClick={() => history.goBack()}>
                    <i className="material-icons">arrow_back</i>
                </div>
                <h1>{course.title}</h1>
            </div>
            <div id="content" className="content-container">
                <img src={course.img} className="card-img-top" alt=""></img>
                <div className="card-buy-button">
                    <BuyButton course={course} trial={trial} endTrial={endTrial} voicecontrol={true}/>
                </div>
                
                <div className="description-container">
                    {course.description.map((cont, i) => {
                        return <ContentContainer key={i} type={cont.type} src={cont.src} />;
                    })}
                </div>
                <ul className="list-group">
                    {
                        episodes.map(episode => {
                            return (
                            <li key={episode.id} className="list-group-item">
                                <p className="m-0">{"Jakso " + episode.episodeNumber + ": " + episode.title}</p>
                                {VoiceControl.addTrackedElementId(episode.id)}
                                <button id={episode.id} type="button" className="btn btn-primary" onClick={() => {
                                    if (user.owned.indexOf(course.id) === -1) {
                                        setShowDenialModal(true);
                                        // alert("Et omista kurssia");
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
            {showDenialModal? < ConfirmationModal title={"Pääsy kielletty"} description={"Osta kurssi päästäksesi kurssin materiaaleihin"} close={null} closeText={null} confirm={closeDenialModal} confirmText={"OK"}/> : null}
        </>
    )
}

export default Course;