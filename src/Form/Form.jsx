import React from 'react';
import "./styles.css";
import House from '../House/House';
import Results from '../Results/Results'
import MultipleClouds from '../Clouds/MultipleClouds';
import Sun from '../Sun/Sun';
import Moon from '../Sun/Moon';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.key = '4779d0f4e9ba4b2449eb0ee7bef11459';
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            timeSun: 'standard',
            timeMoon: 'moonStd',
            code: null,
            temp: null,
            weather: null,
            applicationStart: false
        };
    }


    async handleChange(e) {

        if (e.key === "Enter") {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${this.key}&units=imperial`).catch((err) => {
                console.log(err.message);
            });

            const data = await response.json();

            if (data.cod === 200) {
                await this.setState({
                    temp: data.main.temp,
                    weather: data.weather[0].description
                });

            }
            this.setState({ applicationStart: true });
            this.setState({ code: data.cod });

            console.log(data);

            let currentTime = new Date().valueOf() / 1000;

            if (currentTime > data.sys.sunrise && currentTime < data.sys.sunset) {
                if (this.state.timeSun !== 'standard') {
                    this.setState({ timeSun: 'dayFromNight' });
                } 
                console.log('day');
            } else {
                if (this.state.timeMoon === 'moonStd') {
                    this.setState({ timeMoon: 'nightFromDay' });
                }
                console.log('night');
            }

            e.target.value = '';
        }
    }


    render() {

        return (
            <div className='container-a'>
                <div className='Title'>
                    <h1>Weather Radar</h1>
                </div>
                <div className='searchBar'>
                    <input type='text' placeholder='  Location' onKeyUp={this.handleChange}></input>
                </div>

                <Sun time={this.state.timeSun}/>
                <Moon time={this.state.timeMoon}/>

                {this.state.applicationStart === true &&
                    <Results code={this.state.code} temp={this.state.temp} weather={this.state.weather} />
                }

                <MultipleClouds />

                <div className='earth'>
                    <House className='house' />
                </div>

                <div className='waves'>
                    <div className='waveOne movement'></div>
                    <div className='waveTwo movement'></div>
                    <div className='waveThree movement'></div>
                </div>

            </div>
        );
    }
}

export default Form;

