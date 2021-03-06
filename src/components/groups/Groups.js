import React from 'react';
import Server from "../../server";
import "./Groups.css";
import { useHistory } from 'react-router-dom';
import BuyButton from "../buybutton/BuyButton";

function Groups() {
    const courses = Server.getCourses();
    const user = Server.getUser();
    const history = useHistory();

    return (
        <>
        <div key={"title"} className="page-title">
            <h1>Valitse kategoria</h1>
        </div>
        </>
    )
}

export default Groups;