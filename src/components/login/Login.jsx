import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-header">
                <h2>CarPOW!</h2>
                <h1>Log In</h1>
            </div>
            <div className="login-form">
                <input className="login-form-item" type="text" placeholder='Email or username' />
                <input className="login-form-item" type="text" placeholder='Password' style={{ marginBottom: "40px" }} />
                <Link to={"/groups"} style={{ textDecoration: "none" }}><div className="btn btn-primary">Log In</div></Link>
                <p style={{ color: "black", fontSize: "small", textAlign: "center" }}>Don't have an account? <span style={{ fontWeight: "600" }}>Sign Up</span></p>
            </div>
            <img src="login-art.png" alt="" />
        </div>
    )
}

export default Login