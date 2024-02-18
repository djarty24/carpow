import React from 'react'
import { Link } from 'react-router-dom'
import './Groups.css'

const Groups = () => {
	return (
		<div className='groups'>
			<div className='groups-wrapper'>
				<div className="groups-title">
					<div className="groups-title-left">
						<h2>Your Carpool</h2>
						<h1>Groups</h1>
					</div>
					<img src="groups-title.png" alt="" className="groups-title-right" />
				</div>
				<hr style={{ border: "5px solid #F2F8F8", borderRadius: "5px", marginBottom: "40px" }} />
				<div className="groups-groups">
					<Link to={"/schedule/Homestead-Kids"} style={{ textDecoration: "none", color: "black" }}>
						<div className="groups-group">
							<img src="group1.png" alt="" />
							<div className="groups-group-info">
								<h4>Homestead Kids</h4>
								<p>Steve Jobs, Linus Torvalds, Richard Feynman, Stephen Hawking</p>
							</div>
						</div>
					</Link>
					<Link to={"/schedule/SMS-Group"} style={{ textDecoration: "none", color: "black" }}>
						<div className="groups-group">
							<img src="group2.png" alt="" />
							<div className="groups-group-info">
								<h4>SMS Group</h4>
								<p>Dennis Ritchie, Monty Python, Steve Wozniack, Joe Biden</p>
							</div>
						</div>
					</Link>
				</div>
				<Link to={"/login"} style={{textDecoration:"none"}}>
					<div className='btn btn-secondary' style={{margin:"10px 40px"}}>Sign Out</div>
				</Link>
			</div>
			<img src="group-road-art.png" alt="" style={{ width: "100%" }} />
		</div>
	)
}

export default Groups