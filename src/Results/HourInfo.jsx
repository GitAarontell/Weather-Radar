import React from 'react';
import './styles.css';

function HourInfo(props) {

    let dt = props.hourly.dt;
    let date = new Date(dt * 1000);
    let hour = date.getHours();
    let timeIndicator = 'AM'

    if(hour === 0){
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
        timeIndicator = 'PM'
    }



    return (
        <div className='hourlyContainer'>

            <div className='hourTime'>
                <p>{`${hour} ${timeIndicator}`}</p>
            </div>

            <div className='weatherImg'>
                <img src={`http://openweathermap.org/img/wn/${props.hourly.weather[0].icon}@2x.png`} alt="current weather" ></img>

                <div className='hourTemp' onClick={()=>{console.log('hello')}}>
                    <p>{Math.round(props.hourly.temp)}° F</p>
                </div>
                
            </div>


        </div>
    );
}

export default HourInfo;