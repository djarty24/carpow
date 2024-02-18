import React from 'react'
import Calendar from 'react-calendar';
import { Link, useParams } from 'react-router-dom'

import './Schedule.css'

const Schedule = () => {

	const { id } = useParams();
	let schedule = id.replace("-", " ");

	const customWeekdayFormat = (locale, date) => {
        return ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()];
    };

	return (
		<div className='schedule'>
			<h1>{schedule}<br />Carpool Schedule</h1>
            <hr style={{ border: "5px solid #F2F8F8", borderRadius: "5px", margin:"5px 25px" }} />
			<Calendar 
			locale="en-US"
			formatShortWeekday={customWeekdayFormat}
			/>
		</div>
	)
}

export default Schedule