import React, { useReducer } from 'react';
import "./BuyButton.css";
import Server from "../../server";

function BuyButton({course}) {
    // eslint-disable-next-line no-unused-vars
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const user = Server.getUser();
    const owned = user.owned.indexOf(course.id) !== -1;

    return (
            <button type="button" className="btn btn-primary" onClick={(e) => {
                e.stopPropagation();
                if (owned) {
                    return;
                }
                const confirmed = window.confirm("Hanki kurssi?");
                if (confirmed) {
                    Server.setUserTrial(false); 
                    Server.addOwned(course.id);
                    forceUpdate();
                }
            }
            }>{owned ? "Omistettu" : user.freeTrial ?  "Ilmainen" : `${course.price} €` }</button>       
    )
}

export default BuyButton;
