import React from 'react';
import './Profile.css'
import VoiceControl from '../../voicecontrol';
import Switch from '@material-ui/core/Switch';
import Server from "../../server";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Profile = () => {
    const user = Server.getUser();
    const [checked, setChecked] = React.useState(VoiceControl.voiceControlActive);
    const toggleChecked = () => {
        setChecked((prev) => !prev);
        VoiceControl.voiceControlActive = !checked;
        VoiceControl.toggle();
    };

    return (
        <>
            <div className="page-title">
                <h1>Profiili</h1>
            </div>
            <div className="component-content-container">
                <h3 className="user-info">Nimi: { user.name }</h3>
                <h3 className="user-info">Email: { user.email }</h3>
                <img className="profile-picture" src={ user.img } alt="profile-picture"/>
            </div>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={toggleChecked} />}
                    label="Kädetön tila päällä"
                />
            </FormGroup>
        </>
    )
}

export default Profile;