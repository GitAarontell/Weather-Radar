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
        <div className={`hourlyContainer`}>

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

//<svg className='rightArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>

//<svg className='leftArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>