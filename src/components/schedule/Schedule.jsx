import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Schedule.css'

const Schedule = () => {
	
	const { id } = useParams();

	return (
		<div>
			<p>Schedule - { id }</p>
		</div>
	)
}

export default Schedule