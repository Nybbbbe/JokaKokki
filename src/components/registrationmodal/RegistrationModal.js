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
                        <form>
                          <label htmlFor="fname">Nimi:</label><br/>
                          <input type="text" id="fname" name="fname"/><br/>
                          <label htmlFor="email">Sähköposti:</label><br/>
                          <input type="email" id="email" name="email"/>
                          <label htmlFor="pw">Salasana:</label><br/>
                          <input type="password" id="pw" name="pw"/><br/><br/>
                          <p>Tykkäätkö:</p>
                          <input type="checkbox" name="thai"/>
                          <label className="clabel" htmlFor="thai">Thai ruoasta?</label><br/>
                          <input type="checkbox" name="brunssi"/>
                          <label className="clabel" htmlFor="brunssi">Brunsseista?</label><br/>
                          <input type="checkbox" name="pasta"/>
                          <label className="clabel" htmlFor="pasta">Pastasta?</label><br/>
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