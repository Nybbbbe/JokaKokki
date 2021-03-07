import React from 'react';
import VoiceControl from '../../voicecontrol';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Profile = () => {
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