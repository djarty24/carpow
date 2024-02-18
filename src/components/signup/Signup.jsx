import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
	return (
		<div>
			<div className='signup'>
				<div className="signup-header">
					<h2>CarPOW!</h2>
					<h1>Sign Up</h1>
				</div>
				<div className="signup-form">
					<input className="signup-form-item" type="text" placeholder='Email or username' />
					<input className="signup-form-item" type="text" placeholder='Password' style={{ marginBottom: "40px" }} />
					<Link to={"/groups"} style={{ textDecoration: "none" }}><div className="btn btn-primary">Sign Up</div></Link>
					<p style={{ color: "black", fontSize: "small", textAlign: "center" }}>Already have an account? <span style={{ fontWeight: "600" }}>Log in</span></p>
				</div>
				<img src="login-art.png" alt="" />
			</div>
		</div>
	)
}

export default Signup