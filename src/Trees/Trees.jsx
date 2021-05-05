import React from 'react';
import './styles.css';

function Trees (props) {

    return(
        <div className='treeContainer'>
            <div className={`leaves ${props.trees[0]}`}></div>
            <div className={`trunk ${props.trees[1]}`}></div>
        </div>
    );
}

export default Trees;