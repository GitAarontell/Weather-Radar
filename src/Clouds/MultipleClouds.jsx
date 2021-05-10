import React from 'react';
import Cloud from './Cloud';
import './styles.css';

function MultipleClouds (props){
    return(
        <div className='multipleClouds'>
            <Cloud type={'one'} clouds={props.clouds}/>
            <Cloud type={'two'} clouds={props.clouds}/>
            <Cloud type={'three'} clouds={props.clouds}/>
        </div>
    );
}

export default MultipleClouds;