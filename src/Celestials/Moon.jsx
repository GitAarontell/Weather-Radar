import React from 'react';
import './styles.css';

function Moon(props) {
    return (
        <div className='moonContainer bothContainers'>
            <div className={`moon ${props.time}`}></div>
        </div>
    );
}

export default Moon;