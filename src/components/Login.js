import './styles/Login.css';

function togglestate(props, data) {
    alert('You are now logged in!')
}

function Login() {
    return(
        <div className='logincontainer'>
            <p>Login Screen</p>
            <button className='loginbutton' onClick={togglestate}>Login</button>
        </div>
    )
}

export default Login;