import React, {useState} from 'react';
import IndividualRainDrop from './IndividualRainDrop';
import {getRandomInt} from '../functions';
import './rainStyles.css';

function Rain() {
    let [rain] = useState(new Array(100).fill(0));
    let i = 0;
    let topPos = 0;
    
    let frontRain = rain.map((int)=> {
        i++;
        //console.log(Math.random(int));
        let leftInt = i-1;       
        let delay = Math.random(int);

        if(i % 2 === 0){
            topPos = (getRandomInt(0,15) + 23) * -1;
        } else {
            topPos = (getRandomInt(0,15) + 5) * -1;
        }

        return(
            <IndividualRainDrop key={Math.random(int)} leftPos={leftInt} delay={delay} topPos={topPos}></IndividualRainDrop>
        );
    });


    return (
        <div className='rainContainer'>
                {frontRain}
        </div>
    );
}

export default Rain;