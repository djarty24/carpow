import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
	<div className='intro'>
		<img src="/header.png" alt="" className='header-img'/>
		<div className="intro-info">
			<h2>Easy Ridesharing.</h2>
			<h1>CarPOW!</h1>
			<div className="intro-info-buttons">
				<div className="btn">SSO</div>
				<div className="btn btn-primary">Sign In</div>
			</div>
			<p style={{color:"white"}}>Don't have an account? <span style={{fontWeight:"600"}}>Sign Up</span></p>
		</div>
	</div>
  )
}

export default Intro