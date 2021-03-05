import React from 'react';
import Server from "../../server";
import "./Course.css";
import { useHistory, useParams } from 'react-router-dom';

const Course = () => {
    const params = useParams();
    const course = Server.getCourse(parseInt(params.id.substring(1)));
    const history = useHistory();

    return (
        [
        <div key="title" className="page-title">
            <div className="title-left-absolute-icon" onClick={() => history.push('/')}>
                <i className="material-icons">arrow_back</i>
            </div>
            <h1>{course.title}</h1>
        </div>,
        <div key="content" className="content-container">
            <img src={course.img} className="card-img-top" alt=""></img>
            <p className="description">{course.description}</p>
        </div>
        ]
    )
}

export default Course;