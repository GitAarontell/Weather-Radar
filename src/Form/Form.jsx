import React from 'react';
import $ from 'jquery';
import "./styles.css";
import Results from '../Results/Results'
import MultipleClouds from '../Clouds/MultipleClouds';
import Sun from '../Celestials/Sun';
import Moon from '../Celestials/Moon';
import Waves from '../Waves/Waves';
import Land from '../LandMass/Land';
import {capitalizeFirstLetters} from '../functions';
import Rain from '../Rain/Rain';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.key = '4779d0f4e9ba4b2449eb0ee7bef11459';
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.timeOfDay = this.timeOfDay.bind(this);

        this.state = {
            timeSun: '',
            timeMoon: '',
            code: null,
            temp: null,
            weather: '',
            applicationStart: false,
            location: '',
            searchBar: $("#input"),
            background: '',
            check: false,
            hills: ['','','',''],
            trees: ['',''],
            cave: ['','','','',''],
            mountain: ['','',''],
            waves: ['','',''],
            clouds: '',
            hourly: '',
            daily: '',
            deskOrTouch: '',
            rain: ''
        };
    }

    timeOfDay(currentTime) {
        try {
            if (currentTime) {
                if (this.state.timeSun !== '' || this.state.timeSun === 'dayFromNight') {
                    this.setState({ timeSun: 'dayFromNight', timeMoon: 'nightFromDay',background: 'dayBackground', hills: ['hillOneDay','hillTwoDay','hillThreeFourDay','hillFiveDay'], trees:['leavesDay','trunkDay'],cave:['entranceDay','upperDay','lowerDay','upperGDay','lowerGDay'], mountain: ['topDay','leftDay','rightDay'], waves: ['waveOneDay','waveTwoDay','waveThreeDay'], clouds: 'cloudDay' });
                }
            } else {
                if (this.state.timeMoon === '' || this.state.timeMoon === 'nightFromDay') {
                    this.setState({ timeSun: 'nightFromDay', timeMoon: 'dayFromNight', background: 'nightBackground',hills: ['hillOneNight','hillTwoNight','hillThreeFourNight','hillFiveNight'],trees:['leavesNight','trunkNight'],cave:['entranceNight','upperNight','lowerNight','upperGNight','lowerGNight'], mountain: ['topNight','leftNight','rightNight'], waves: ['waveOneNight','waveTwoNight','waveThreeNight'],clouds: 'cloudNight' });
                }
            }
        } catch (error) {
            console.log(error);
        }
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
            const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,alerts&appid=${this.key}&units=imperial`).catch((err) => {
                console.log(err.message);
            });
            
            const data2 = await response2.json();

            this.setState({
                temp: data.main.temp,
                weather: capitalizeFirstLetters(data.weather[0].description),
                hourly: data2.hourly,
                daily: data2.daily,
                rain: data.weather[0].main
            });

            this.timeOfDay(data.weather[0].icon.charAt(2) === 'd');
        }

        // checks to see if user started any searches
        this.setState({ applicationStart: true });
        this.setState({ code: data.cod });

        console.log(data);

        // sets search bar to empty after search button clicked
        this.state.searchBar.value = '';

        //touch screen device or not
        if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
            this.setState({deskOrTouch: 'thirdRow'});
        }else {
            this.setState({deskOrTouch: 'thirdRowDesk'});
        }

        console.log(this.state.rain);
    }

    render() {

        return (
            <div className={`container-a ${this.state.background}`}>

                <div className='Title'>
                    <h1>Weather Radar</h1>
                </div>

                <div className='searchBar'>
                    <input id='input' type='text' placeholder=' Location' onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M23.832 19.641l-6.821-6.821c2.834-5.878-1.45-12.82-8.065-12.82-4.932 0-8.946 4.014-8.946 8.947 0 6.508 6.739 10.798 12.601 8.166l6.879 6.879c1.957.164 4.52-2.326 4.352-4.351zm-14.886-4.721c-3.293 0-5.973-2.68-5.973-5.973s2.68-5.973 5.973-5.973c3.294 0 5.974 2.68 5.974 5.973s-2.68 5.973-5.974 5.973z"/></svg>
                    </button>
                </div>

                <Sun time={this.state.timeSun} />
                <Moon time={this.state.timeMoon} />

                {this.state.applicationStart === true &&
                    <div className='results'>
                        <Results deskTouch={this.state.deskOrTouch} code={this.state.code} temp={this.state.temp} weather={this.state.weather} hourly={this.state.hourly}/>
                    </div>
                }

                <MultipleClouds clouds={this.state.clouds}/>

                {this.state.rain === "Rain" &&
                    <Rain></Rain>
                }
 

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