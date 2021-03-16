import React, { useState, useMemo } from 'react';
import Server from "../../server";
import "./Courses.css";
import VoiceControl from '../../voicecontrol';
import { useHistory } from 'react-router-dom';
import BuyButton from "../buybutton/BuyButton";
import Filter from "../filter/Filter";
import FilterHandler from "../../filterhandler";

function CoursesOwned() {
    const courses = Server.getMyCourses();
    const user = Server.getUser();
    const history = useHistory();
    const [trial, setTrial] = useState(user.freeTrial);
    const [filter, setFilter] = useState(FilterHandler.currentFilter);
    
    function endTrial() {
        Server.setUserTrial(false)
        setTrial(false)
    }

    function onFilterChange(newFilter) {
        setFilter(newFilter);
    }

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => FilterHandler.shouldShowCourse(course));
    }, [courses, filter]);

    return (
        <>
        <div className="page-title">
            <h1>Omat Kurssit</h1>
        </div>
        <div id="content" className="component-content-container">
        <Filter onFilterChange={onFilterChange} />
            <div className="grid-container">
                {
                    filteredCourses.map((course) => {
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

export default CoursesOwned;