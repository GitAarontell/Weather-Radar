import React from 'react';
import './styles.css';
import Temperature from './Temperature';
import Error from './ErrorLocation';

class Results extends React.Component {

    render() {
        
        let post;

        if(this.props.code === 200){
            post = <Temperature temp={this.props.temp} weather={this.props.weather}></Temperature>
        } else {
            post = <Error></Error>
        }

        return (            
            post            
        );
    }
}

export default Results;