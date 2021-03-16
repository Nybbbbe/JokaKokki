import React, { useState } from 'react';
import Server from "../../server";
import "./ConfirmationModal.css";
import VoiceControl from '../../voicecontrol';
import { useHistory, useParams } from 'react-router-dom';
import BuyButton from '../buybutton/BuyButton';

const ConfirmationModal = ({title, description, close, closeText, confirm, confirmText}) => {
    return (
        <>
        <div className="modal" role="dialog" onClick={(e) => {e.stopPropagation(); close()}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    {close?
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => {e.stopPropagation(); close()}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    :
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => {e.stopPropagation(); confirm()}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    }
                    
                </div>
                <div className="modal-body">
                    <p>{description}</p>
                </div>
                <div className="modal-footer">
                    {confirm? <button type="button" className="btn btn-primary" onClick={(e) => {e.stopPropagation(); confirm()}}>{confirmText}</button>: null}
                    {close? <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={(e) => {e.stopPropagation(); close()}}>{closeText}</button> : null}
                </div>
                </div>
            </div>
        </div>
        <div className="backdrop"></div>
        </>
    )
}

export default ConfirmationModal;