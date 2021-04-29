import React from 'react';
import './styles.css';

function Waves (props) {
    return(
        <div className='waveContainer'>
            <div className='ballOne allBalls'></div>
            <div className='ballTwo allBalls'></div>
            <div className='ballThree allBalls'></div>
        </div>
    );
}

export default Waves;