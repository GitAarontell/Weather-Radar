import React from 'react';
import './styles.css';

function Cloud (props) {

    return(
        <div className={`cloud ${props.type}`}>
            <div className='structureOne allStructures'></div>
            <div className='structureTwo allStructures'></div>
            <div className='structureThree allStructures'></div>
            <div className='structureFour allStructures'></div>
        </div>
    );
}

export default Cloud;