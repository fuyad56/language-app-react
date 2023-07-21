import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-content">
                <h1>login</h1>
                <div className="login-input">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                </div>
                <div className="signup">
                    <p>Forgot <a href="/login">Username <span>/</span> Password</a>?</p>
                    <p>Don't have an account? <a href="/login">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;