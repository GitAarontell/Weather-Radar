import React from 'react';
import './styles.css';

function Sun(props) {
    return (
        <div className='sunContainer bothContainers'>
            <div className={`sun ${props.time}`}></div>
        </div>
    );
}

export default Sun;