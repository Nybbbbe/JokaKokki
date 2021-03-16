import React, { useReducer, useState } from 'react';
import ConfirmationModal from '../confirmationmodal/ConfirmationModal';
import "./BuyButton.css";
import Server from "../../server";

function BuyButton({course, trial, endTrial}) {
    // eslint-disable-next-line no-unused-vars
    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const user = Server.getUser();
    const owned = user.owned.indexOf(course.id) !== -1;

    const closeConfirmationModal = () => {
        setShowConfirmationModal(false);
    }

    const buyConfirmation = () => {
        setShowConfirmationModal(false);
        Server.setUserTrial(false); 
        Server.addOwned(course.id);
        endTrial();
        // forceUpdate();
    }


    return (
            <>
            <button type="button" className="btn btn-primary" onClick={(e) => {
                e.stopPropagation();
                if (owned) {
                    return;
                }
                setShowConfirmationModal(true);
            }
            }>{owned ? "Omistettu" : trial ?  "Ilmainen" : `${course.price} €` }</button>     
            {showConfirmationModal? < ConfirmationModal title={"Osta"} description={`Olet ostamassa kussin: ${course.title}`} close={closeConfirmationModal} closeText={"Sulje"} confirm={buyConfirmation} confirmText={"Osta"}/> : null}
            </>
    )
}

export default BuyButton;
