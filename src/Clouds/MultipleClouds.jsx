import React from 'react';
import Cloud from './Cloud';
import './styles.css';

function MultipleClouds (){
    return(
        <div className='multipleClouds'>
            <Cloud type={'one'}/>
            <Cloud type={'two'}/>
            <Cloud type={'three'}/>
        </div>
    );
}

export default MultipleClouds;