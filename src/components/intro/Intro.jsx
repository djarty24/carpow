import React from 'react'
import { Link } from 'react-router-dom'
import './Intro.css'

const Intro = () => {
  return (
	<div className='intro'>
		<img src="/header.png" alt="" className='header-img'/>
		<div className="intro-info">
			<h2>Easy Ridesharing.</h2>
			<h1>CarPOW!</h1>
			<div className="intro-info-buttons">
				<div className="btn btn-secondary">SSO</div>
				<Link to={"/login"} style={{textDecoration:"none"}}><div className="btn btn-primary">Log In</div></Link>	
			</div>
			<p style={{color:"white", fontSize:"small", textAlign:"center"}}>Don't have an account? <span style={{fontWeight:"600"}}>Sign Up</span></p>
		</div>
	</div>
  )
}

export default Intro