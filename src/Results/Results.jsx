import React from 'react';
import './styles.css';

class Results extends React.Component {
    render() {
        return (
            <div className='centeredColumnFlex'>
                <div className='infoContainer centeredColumnFlex'>
                    <h1>{this.props.temp}°F</h1>
                    <h1>{this.props.weather}</h1>
                </div>
            </div>
        );
    }
}

export default Results;