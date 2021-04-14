import React from 'react';
import "./styles.css";
import House from '../House/House';
import Results from '../Results/Results'
import MultipleClouds from '../Clouds/MultipleClouds';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.key = '4779d0f4e9ba4b2449eb0ee7bef11459';
        this.handleChange = this.handleChange.bind(this);
        


        this.state = {
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
                this.setState({ applicationStart: true });
            }
            this.setState({ code: data.cod });

            //console.log(this.state.weather);

            e.target.value = '';
        }
    }

    

    render() {
        console.log(this.state.applicationStart);
        return (
            <div className='container-a'>
                <div className='Title'>
                    <h1>Weather Radar</h1>
                </div>
                <div className='searchBar'>
                    <input type='text' placeholder='  Location' onKeyUp={this.handleChange}></input>
                </div>

                {this.state.applicationStart === true && 
                    <Results code={this.state.code} temp={this.state.temp} weather={this.state.weather}/>                                   
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

/*
{set.logTotal > 0 &&
                <div className='totalCart-a'>
                    {totalCart}
                    <h3>Total: ${totalCost()}</h3>
                </div>
            }



                                <div className='centeredColumnFlex'>
                        <div className='infoContainer centeredColumnFlex'>
                            <h1>{Math.round(this.state.temp)}° F</h1>
                            <h1>{this.state.weather}</h1>
                        </div>
                    </div>
*/