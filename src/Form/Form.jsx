import React from 'react';
import "./styles.css";
import House from '../House/House';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.key = '4779d0f4e9ba4b2449eb0ee7bef11459';
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            temp: null,
            weather: null,
            applicationStart: false
        };
    }



    async handleChange(e) {
        if (e.key === "Enter") {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${this.key}&units=imperial`);

            const data = await response.json();
            await this.setState({
                temp: data.main.temp,
                weather: data.weather[0].description
            });

            console.log(this.state.weather);
            this.setState({ applicationStart: true });
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

                {this.state.applicationStart === true &&
                    <div className='temperature'>
                        <h1>{Math.round(this.state.temp)}° Farenheit</h1>
                        <h1>{this.state.weather}</h1>
                    </div>
                }

                <div className='earth'>
                    <House className='house'></House>
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

/*
{set.logTotal > 0 &&
                <div className='totalCart-a'>
                    {totalCart}
                    <h3>Total: ${totalCost()}</h3>
                </div>
            }
*/