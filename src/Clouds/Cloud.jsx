import React from 'react';
import './styles.css';

function Cloud (props) {

    return(
        <div className={`cloud ${props.type}`}>
            <div className={`structureOne allStructures ${props.clouds}`}></div>
            <div className={`structureTwo allStructures ${props.clouds}`}></div>
            <div className={`structureThree allStructures ${props.clouds}`}></div>
            <div className={`structureFour allStructures ${props.clouds}`}></div>
        </div>
    );
}

export default Cloud;