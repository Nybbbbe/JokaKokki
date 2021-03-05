import React from 'react';
import Server from "../../server";
import "./Courses.css";
import { useHistory } from 'react-router-dom';

function Courses() {
    const courses = Server.getCourses();
    const history = useHistory();

    return (
        [
        <div key={"title"} className="page-title">
            <h1>Valitse Kurssi</h1>
        </div>,
        <div key={"content"} className="grid-container">
            {
                courses.map((course) => {
                    return (
                        <div key={course.id} onClick={() => history.push('/course:' + course.id)} className="card clickable">
                            <img src={course.img} className="card-img-top" alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
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