import React from 'react';
import "./styles.css";
import Results from '../Results/Results'
import MultipleClouds from '../Clouds/MultipleClouds';
import Sun from '../Celestials/Sun';
import Moon from '../Celestials/Moon';
import Waves from '../Waves/Waves';
import Land from '../LandMass/Land';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.key = '4779d0f4e9ba4b2449eb0ee7bef11459';
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.capitalizeFirstLetters = this.capitalizeFirstLetters.bind(this);
        this.timeOfDay = this.timeOfDay.bind(this);

        this.state = {
            timeSun: '',
            timeMoon: '',
            code: null,
            temp: null,
            weather: '',
            applicationStart: false,
            location: '',
            searchBar: null,
            background: '',
            check: false,
            hills: ['','','',''],
            trees: ['',''],
            cave: ['','','','',''],
            mountain: ['','',''],
            waves: ['','',''],
            clouds: ''
        };
    }

    //Need to put these functions in a javascript file then import
    //Font needs to be some sort of nature font, also hover states please

    timeOfDay(currentTime) {
        try {
            if (currentTime) {
                if (this.state.timeSun !== '' || this.state.timeSun === 'dayFromNight') {
                    this.setState({ timeSun: 'dayFromNight', timeMoon: 'nightFromDay',background: 'dayBackground', hills: ['hillOneDay','hillTwoDay','hillThreeFourDay','hillFiveDay'], trees:['leavesDay','trunkDay'],cave:['entranceDay','upperDay','lowerDay','upperGDay','lowerGDay'], mountain: ['topDay','leftDay','rightDay'], waves: ['waveOneDay','waveTwoDay','waveThreeDay'], clouds: 'cloudDay' });
                }
                console.log('day');
            } else {
                if (this.state.timeMoon === '' || this.state.timeMoon === 'nightFromDay') {
                    this.setState({ timeSun: 'nightFromDay', timeMoon: 'dayFromNight', background: 'nightBackground',hills: ['hillOneNight','hillTwoNight','hillThreeFourNight','hillFiveNight'],trees:['leavesNight','trunkNight'],cave:['entranceNight','upperNight','lowerNight','upperGNight','lowerGNight'], mountain: ['topNight','leftNight','rightNight'], waves: ['waveOneNight','waveTwoNight','waveThreeNight'],clouds: 'cloudNight' });
                }
                console.log('night');
            }
        } catch (error) {
            console.log(error);
        }
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

    async handleClick() {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=${this.key}&units=imperial`).catch((err) => {
            console.log(err.message);
        });

        const data = await response.json();

        if (data.cod === 200) {

            this.setState({
                temp: data.main.temp,
                weather: this.capitalizeFirstLetters(data.weather[0].description)
            });

            this.timeOfDay(data.weather[0].icon.charAt(2) === 'd');
        }
        this.setState({ applicationStart: true });
        this.setState({ code: data.cod });

        console.log(data);

        this.state.searchBar.value = '';
    }

    render() {

        return (
            <div className={`container-a ${this.state.background}`}>

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
                    <div className='results'>
                        <Results code={this.state.code} temp={this.state.temp} weather={this.state.weather} />
                    </div>
                }

                <MultipleClouds clouds={this.state.clouds}/>

                <Land time={this.state.hills} trees={this.state.trees} cave={this.state.cave} mountain={this.state.mountain}></Land>
                <Waves waves={this.state.waves}></Waves>

            </div>
        );
    }
}

export default Form;


            /* 
            Keeping for historical records
            
            let date = new Date();
            let localTime = date.valueOf() / 1000; // gets local time in seconds

            let localOffset = date.getTimezoneOffset() * 60; // get timezone offset and turns from minutes to seconds
            let utc = localTime + localOffset; // this is utc time which is universal time

            let currentTime2 = utc + data.timezone; // it then add the timezone offset of wherever location i get back to the universal to get their local time

            let sunrise = data.sys.sunrise;
            let sunset = data.sys.sunset;

            let nd = new Date(currentTime2 * 1000);
            console.log(nd);
            */