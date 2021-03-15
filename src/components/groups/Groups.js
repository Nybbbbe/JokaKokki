import React, { useEffect, useState, useMemo } from "react";
import Server from "../../server";
import VoiceControl from "../../voicecontrol";
import "./Groups.css";
import { useHistory } from "react-router-dom";
import Filter from "../filter/Filter";

import FilterHandler from "../../filterhandler";

function Groups() {
    const groups = Server.getGroups();
    const history = useHistory();

    const [filter, setFilter] = useState(FilterHandler.currentFilter);

    const routeToGroup = (groupClass) => {
        history.push("/courses:" + groupClass);
    };

    function onFilterChange(newFilter) {
        setFilter(newFilter);
    }

    const filteredGroups = useMemo(() => {
        return groups.filter((group) => {
            const courses = Server.getCoursesByGroup(group.class);
            console.log(courses);
            return courses.some((course) => FilterHandler.shouldShowCourse(course));
        });
    }, [groups, filter]);

    return (
        <>
            <div key={"title"} className="page-title">
                <h1>Valitse kategoria</h1>
            </div>
            <div className="component-content-container">
                <Filter onFilterChange={onFilterChange} />
                <div className="grid-container">
                    {filteredGroups.map((group) => {
                        return (
                            <div key={group.id} className="image-container">
                                {VoiceControl.addTrackedElementId(group.id)}
                                <div
                                    id={group.id}
                                    className="image clickable"
                                    onClick={() => routeToGroup(group.class)}
                                    style={{ backgroundImage: "linear-gradient(0deg, #00000088 30%, #ff4fff00 120%), url(" + group.img + ")" }}
                                >
                                    <div className="text-container">
                                        <h1>{group.title}</h1>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Groups;
