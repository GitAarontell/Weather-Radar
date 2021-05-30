import React from 'react';
import './rainStyles.css';

function IndividualRainDrop(props) {

    return (
        <div style={{left: `${props.leftPos}%`, top: `${props.topPos}vh`}} className='positioningContainer'>
            <div style={{animationDelay: `${props.delay}s`}} className='rainDropContainer'>
                <div style={{animationDelay: `${props.delay}s`}} className='rain'>

                </div>
                <div style={{animationDelay: `${props.delay}s`}} className='drop'>

                </div>
            </div>
        </div>
    );
}

export default IndividualRainDrop;