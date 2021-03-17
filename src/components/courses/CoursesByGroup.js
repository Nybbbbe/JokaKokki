import React, { useState, useMemo } from "react";
import Server from "../../server";
import VoiceControl from '../../voicecontrol';
import "./Courses.css";
import { useHistory, useParams } from "react-router-dom";
import BuyButton from "../buybutton/BuyButton";
import Filter from "../filter/Filter";
import FilterHandler from "../../filterhandler";

function CoursesByGroup() {
    const params = useParams();
    const courses = Server.getCoursesByGroup(params.group.substring(1));
    const user = Server.getUser();
    const history = useHistory();
    const [trial, setTrial] = useState(user.freeTrial);
    const [filter, setFilter] = useState(FilterHandler.currentFilter);

    function endTrial() {
        Server.setUserTrial(false);
        setTrial(false);
    }

    function onFilterChange(newFilter) {
        setFilter(newFilter);
    }

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => FilterHandler.shouldShowCourse(course));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courses, filter]);

    return (
        <>
            <div className="page-title">
                <h1>Valitse Kurssi</h1>
                <div id="back" className="title-left-absolute-icon clickable" onClick={() => history.push("/")}>
                    <i className="material-icons">arrow_back</i>
                </div>
            </div>
            <div id="content" className="component-content-container">
                <Filter onFilterChange={onFilterChange} />
                <div className="grid-container">
                    {filteredCourses.map((course) => {
                        return (
                            <div
                                id={course.id}
                                key={course.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    history.push("/course:" + course.id);
                                }}
                                className="card clickable"
                            >
                            {VoiceControl.addTrackedElementId(course.id)}
                                <div className="card-img-top custom-background" style={{ backgroundImage: "url(" + course.img + ")" }}></div>
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                    <BuyButton course={course} trial={trial} endTrial={endTrial} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default CoursesByGroup;
