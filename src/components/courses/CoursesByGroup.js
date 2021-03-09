import React, { useState } from 'react';
import Server from "../../server";
import "./Courses.css";
import { useHistory, useParams } from 'react-router-dom';
import BuyButton from "../buybutton/BuyButton";

function CoursesByGroup() {
    const params = useParams();
    const courses = Server.getCoursesByGroup(params.group.substring(1));
    const user = Server.getUser();
    const history = useHistory();
    const [trial, setTrial] = useState(user.freeTrial);

    function endTrial() {
        Server.setUserTrial(false)
        setTrial(false)
    }

    return (
        <>
        <div className="page-title">
            <h1>Valitse Kurssi</h1>
            <div id="back" className="title-left-absolute-icon clickable" onClick={() => history.push('/')}>
                <i className="material-icons">arrow_back</i>
            </div>
        </div>
        <div className="component-content-container">
        <div className="grid-container">
            {
                courses.map((course) => {
                    return (
                        <div key={course.id} onClick={(e) => {
                            e.stopPropagation();
                            history.push('/course:' + course.id)}
                            } className="card clickable">
                            <div className="card-img-top custom-background" style={{backgroundImage: "url(" + course.img + ")"}}></div>
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <BuyButton course={course} trial={trial} endTrial={endTrial} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}

export default CoursesByGroup;