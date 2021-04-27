import React from 'react';
import "./styles.css";
import House from '../House/House';
import Results from '../Results/Results'
import MultipleClouds from '../Clouds/MultipleClouds';
import Sun from '../Celestials/Sun';
import Moon from '../Celestials/Moon';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.key = '4779d0f4e9ba4b2449eb0ee7bef11459';
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.capitalizeFirstLetters = this.capitalizeFirstLetters.bind(this);

        this.state = {
            timeSun: '',
            timeMoon: '',
            code: null,
            temp: null,
            weather: '',
            applicationStart: false,
            location: '',
            searchBar: null,
            check: false
        };
    }

    capitalizeFirstLetters(str) {
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (i === 0) {
                newStr = str[i].toUpperCase();
            } else if (str[i] === ' ' && (i + 1 < str.length)) {
                newStr += ' ' + str[i + 1].toUpperCase();
            } else {
                if (str[i - 1] !== ' ') {
                    newStr += str[i];
                }
            }
        }
        return newStr;
    }

    handleChange(e) {
        this.setState({
            location: e.target.value,
            searchBar: e.target
        });
    }

    async handleClick(e) {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=${this.key}&units=imperial`).catch((err) => {
            console.log(err.message);
        });

        const data = await response.json();

        if (data.cod === 200) {
            console.log(data.weather.description);
            await this.setState({
                temp: data.main.temp,
                weather: this.capitalizeFirstLetters(data.weather[0].description)
            });
            //this.capitalizeFirstLetters(this.state.weather);
        }
        this.setState({ applicationStart: true });
        this.setState({ code: data.cod });

        console.log(data);

        // put this in function later
        let currentTime = new Date().valueOf() / 1000;

        try {
            if (currentTime > data.sys.sunrise && currentTime < data.sys.sunset) {
                if (this.state.timeSun !== '') {
                    this.setState({ timeSun: 'dayFromNight', timeMoon: 'nightFromDay' });
                }
                console.log('day');
            } else {
                if (this.state.timeMoon === '') {
                    this.setState({ timeSun: 'nightFromDay', timeMoon: 'dayFromNight' });
                }
                console.log('night');
            }
        } catch (error) {
            console.log(error);
        }
        //////////////////////////////////////
        this.state.searchBar.value = '';
    }

    handleClickTwo() {

        if (this.state.check === false) {
            this.setState({ timeSun: 'nightFromDay', timeMoon: 'dayFromNight', check: true });
        } else {
            this.setState({ timeSun: 'dayFromNight', timeMoon: 'nightFromDay', check: false });
        }

    }
    render() {

        return (
            <div className='container-a'>
                <div className='Title'>
                    <h1>Weather Radar</h1>
                </div>
                <div className='searchBar'>
                    <input type='text' placeholder='  Location' onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>Search</button>
                </div>

                <Sun time={this.state.timeSun} />
                <Moon time={this.state.timeMoon} />

                {this.state.applicationStart === true &&
                    <Results code={this.state.code} temp={this.state.temp} weather={this.state.weather} />
                }

                <MultipleClouds />
                <button className='botton' onClick={this.handleClickTwo}>Click</button>
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

