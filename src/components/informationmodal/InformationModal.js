import React from 'react';
import "./InformationModal.css";

const InformationModal = ({close}) => {
    return (
        <>
        <div className="modal" role="dialog" onClick={(e) => {e.stopPropagation(); close()}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Miten käyttää ääniohjausta</h5>
                    </div>
                    <div className="modal-body">
                        <p>1. Laita ääniohjaus päälle</p>
                        <p>2. Anna laitteellesi lupa käyttää mikrofonia</p>
                        <p>3. Navigoi sanomalla sana 'V':n jälkeen, esim. 'Home' tai 'Groups'</p>
                        <p>Voit myös navigoida ylös ja alaspäin sivuilla sanomalla "Scroll up" ja "Scroll down"</p>
                    </div>
                    <div className="modal-footer">
                        {
                        close
                            ? <button id="close" type="button" className="btn btn-secondary relative" data-dismiss="modal" onClick={(e) => {e.stopPropagation(); close()}}>Sulje</button> 
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="backdrop"></div>
        </>
    )
}

export default InformationModal;