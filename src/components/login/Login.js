import './Login.css'

function Login({userLogin}) {
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
                </div>
            </div>
        </>
    )
}

export default Login;