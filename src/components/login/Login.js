import React, { useState } from 'react';
import RegistrationModal from '../registrationmodal/RegistrationModal'
import './Login.css'


function Login({userLogin}) {
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className="content">
                <div className="login-container">
                    <h1 className="login-text"> Jokakokki </h1>
                    <button
                        type="button" 
                        className="btn btn-green" 
                        onClick={ () => {
                            userLogin()
                        }}
                    > Login </button>
                    <button type="button" className="reg btn btn-green" onClick={() => setShowModal(true)}>Rekisteröidy</button>
                </div>
            </div>
            { showModal ? <RegistrationModal close={closeModal} userLogin={userLogin}/> : null }
        </>
    )
}

export default Login;