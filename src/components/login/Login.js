import './Login.css'

function Login({userLogin}) {
    return (
        <>
            <div className="page-title login-title">
                <h1>Jokakokki</h1>
            </div>
            <div className="content">
                <div className="login-container">
                    <h2 className="login-text"> Kirjaudu sisään: </h2>
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