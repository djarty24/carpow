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
            <hr style={{ border: "5px solid #F2F8F8", borderRadius: "5px", margin: "5px 25px" }} />
            <Calendar
                locale="en-US"
                formatShortWeekday={customWeekdayFormat}
            />
            <hr style={{ border: "5px solid #F2F8F8", borderRadius: "5px", margin: "5px 25px" }} />
            <div className="weeks">
                <div className="weeks-week">
                    <div className="weeks-week-info">
                        <div>
                            <h4>Week 1</h4>
                            <h6>1/29/24 - 2/2/24</h6>
                        </div>
                        <p>Slots Remaining</p>
                    </div>
                </div>
                <div className="weeks-week">
                    <div className="weeks-week-info">
                        <div>
                            <h4>Week 2</h4>
                            <h6>1/29/24 - 2/2/24</h6>
                        </div>
                        <p>Full</p>
                    </div>
                </div>
                <div className="weeks-week">
                    <div className="weeks-week-info">
                        <div>
                            <h4>Week 3</h4>
                            <h6>1/29/24 - 2/2/24</h6>
                        </div>
                        <p>Full</p>
                    </div>
                </div>
                <div className="weeks-week">
                    <div className="weeks-week-info">
                        <div>
                            <h4>Week 4</h4>
                            <h6>1/29/24 - 2/2/24</h6>
                        </div>
                        <p>Slots Remaining</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule