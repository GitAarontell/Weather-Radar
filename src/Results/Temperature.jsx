import React from 'react';
import './styles.css';

function Temperature(props) {
    return (
        <div className='centeredColumnFlex'>
            <div className='infoContainer centeredColumnFlex'>
                <h1>{Math.round(props.temp)}° F</h1>
                <h1>{props.weather}</h1>
            </div>
        </div>
    );
}

export default Temperature;