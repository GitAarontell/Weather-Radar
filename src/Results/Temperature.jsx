import React, { useState } from 'react';
import HourInfo from './HourInfo';
import './styles.css';

function Temperature(props) {

    let [position, setPosition] = useState(['']);

    function handleLeftClick() {
        setPosition(['selected']);
        console.log("hello");
        console.log(position[0]);
    }

    function clickFunction() {
        console.log("hello");
    }

    // slice()
    /*
    // how about we post all 12 hours ahead and just animate the widths to 
        */
    //let hourObjArr = props.hourly.slice(1,13);

    let hourInfoPosting = props.hourly.slice(1, 13).map((arr) => {
        return (
            <HourInfo hourly={arr} key={arr.dt} class={position[0]}></HourInfo>
        );
    });

    return (

        <div className='infoContainer'>
            <div className='topRow'>
                <div className='currentTempDisp'>
                    <h1>{Math.round(props.temp)}° F</h1>
                    <img src={`http://openweathermap.org/img/wn/${props.hourly[0].weather[0].icon}@2x.png`} alt="weather icon" />
                </div>

                <div className='weatherDescription'>
                    <h1>{props.weather}</h1>
                </div>
            </div>

            <div className='thirdRow'>


                {hourInfoPosting}



            </div>
        </div>
    );
}
export default Temperature;



//<svg onClick={() => clickFunction()} className='rightArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>

//<svg onClick={() => clickFunction()} className='leftArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>

/*
            <svg onClick={() => handleLeftClick()} className='leftArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>

                {hourInfoPosting}

                <svg className='rightArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                </svg>
*/