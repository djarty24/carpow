import React from 'react'
import { Link, useParams } from 'react-router-dom'

import './Schedule.css'

const Schedule = () => {
	
	const { id } = useParams();
	let schedule = id.replace("-"," ");

	return (
		<div className='schedule'>
			<h1>{ schedule }<br/>Carpool Schedule</h1>
		</div>
	)
}

export default Schedule