import React, { useState } from 'react';
import Server from "../../server";
import "./Courses.css";
import { useHistory } from 'react-router-dom';
import BuyButton from "../buybutton/BuyButton";

function Courses() {
    const courses = Server.getCourses();
    const user = Server.getUser();
    const history = useHistory();
    const [trial, setTrial] = useState(user.freeTrial);

    function endTrial() {
        Server.setUserTrial(false)
        setTrial(false)
    }

    return (
        [
        <div key={"title"} className="page-title">
            <h1>Valitse Kurssi</h1>
            <div className="title-left-absolute-icon clickable" onClick={() => history.push('/')}>
                <i className="material-icons">arrow_back</i>
            </div>
        </div>,
        <div key={"content"} className="grid-container">
            {
                courses.map((course) => {
                    return (
                        <div key={course.id} onClick={(e) => {
                            e.stopPropagation();
                            history.push('/course:' + course.id)}
                            } className="card clickable">
                            <img src={course.img} className="card-img-top" alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <BuyButton course={course} trial={trial} endTrial={endTrial} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
        ]
    )
}

export default Courses;