import React from 'react';
import "./RegistrationModal.css";

const RegistrationModal = ({close, userLogin}) => {
    return (
        <>
        <div className="modal" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Rekisteröidy</h5>
                    </div>
                    <div className="modal-body">
                        <form className="form-saver">
                          <label htmlFor="fname">Nimi:</label>
                          <input type="text" id="fname" name="fname"/>
                          <label htmlFor="email">Sähköposti:</label>
                          <input type="email" id="email" name="email"/>
                          <label htmlFor="pw">Salasana:</label>
                          <input type="password" id="pw" name="pw"/><br/>
                          <h3>Tykkäätkö:</h3>
                          <div>
                            <input type="checkbox" name="thai"/>
                            <label className="clabel" htmlFor="thai">Thai ruoasta?</label>
                          </div>
                          <div>
                            <input type="checkbox" name="brunssi"/>
                            <label className="clabel" htmlFor="brunssi">Brunsseista?</label>
                          </div>
                          <div>
                            <input type="checkbox" name="pasta"/>
                            <label className="clabel" htmlFor="pasta">Pastasta?</label>
                          </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        {close ? <button id="close" type="button" className="btn btn-secondary relative" onClick={(e) => {e.stopPropagation(); close()}}>Sulje</button>: null}
                        {close ? <button type="button" className="btn btn-secondary relative" onClick={() => userLogin()}>Lähetä</button>:null}
                    </div>
                </div>
            </div>
        </div>
        <div className="backdrop"></div>
        </>
    )
}

export default RegistrationModal;