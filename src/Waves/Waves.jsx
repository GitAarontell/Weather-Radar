import React from 'react';
import './styles.css';

function Waves (props) {
    return(
        <div className='waveContainer'>
            <div className={`waveOne allWaves ${props.waves[0]}`}></div>
            <div className={`waveTwo allWaves ${props.waves[1]}`} ></div>
            <div className={`waveThree allWaves ${props.waves[2]}`}></div>
        </div>
    );
}

export default Waves;