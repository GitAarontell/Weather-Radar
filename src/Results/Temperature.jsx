import React, { useState } from 'react';
import HourInfo from './HourInfo';
import './styles.css';

function Temperature(props) {

    let [slider, setSlider] = useState();
    let [mouseDown, setMouseDown] = useState();
    let [startX, setStartX] = useState();
    let [scrollLeft, setScrollLeft] = useState();

    function handleMouseDown(e) {
        setSlider(e.currentTarget);
        setMouseDown(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    }

    function handleMouseUp() {
        setMouseDown(false);
    }

    function handleMouseMove(e) {
        if (!mouseDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    }

    let hourInfoPosting = props.hourly.slice(1, 25).map((arr) => {
        return (
            <HourInfo hourly={arr} key={arr.dt} ></HourInfo>
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

            <div className={`${props.deskTouch}`} onMouseDown={handleMouseDown} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                {hourInfoPosting}
            </div>
        </div>
    );
}
export default Temperature;