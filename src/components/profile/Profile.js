import React, { useState } from 'react';
import './Profile.css'
import VoiceControl from '../../voicecontrol';
import Switch from '@material-ui/core/Switch';
import Server from '../../server';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InformationModal from '../informationmodal/InformationModal'

const Profile = () => {
    const user = Server.getUser();
    const [checked, setChecked] = useState(VoiceControl.voiceControlActive);
    const [showModal, setShowModal] = useState(false)
    const toggleChecked = () => {
        setChecked((prev) => !prev);
        VoiceControl.voiceControlActive = !checked;
        VoiceControl.toggle();
    };
    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className="page-title">
                <h1>Profiili</h1>
            </div>
            <div id="content" className="profile-content-container">
                <div className="d-flex flex-column justify-content-center ">
                    <h3 className="user-info">Nimi: { user.name }</h3>
                    <h3 className="user-info">Email: { user.email }</h3>
                    {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    }<img className="profile-picture" src={ user.img } alt="profile-picture"/>
                </div>
                <div class="bottom-content">
                    <button type="button" className="btn btn-secondary relative mb-3" onClick={() => setShowModal(true)}>Ääniohjauksen ohjeet</button>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={toggleChecked} />}
                            label="Ääniohjaus"
                        />
                    </FormGroup>
                </div>
            </div>
            { showModal ? <InformationModal close={closeModal}/> : null }
        </>
    )
}

export default Profile;