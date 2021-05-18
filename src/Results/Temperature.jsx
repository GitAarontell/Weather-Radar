import React, { useState } from 'react';
import HourInfo from './HourInfo';
import './styles.css';

function Temperature(props) {

    let [position, setPosition] = useState(['']);
    // slice()
    /*
    // how about we post all 12 hours ahead and just animate the widths to 
        */
    //let hourObjArr = props.hourly.slice(1,13);

    let hourInfoPosting = props.hourly.slice(1, 4).map((arr) => {
        return (
            <HourInfo hourly={arr} key={arr.dt}></HourInfo>
        );
    });

    return (

        <div className='infoContainer'>
            <div className='topRow'>
                <div className='currentTempDisp'>
                    <h1>{Math.round(props.temp)}° F</h1>
                    <img src={`http://openweathermap.org/img/wn/${props.hourly[0].weather[0].icon}@2x.png`} alt="weather icon" />
                </div>

                <div className='weatherDescription'>
                    <h1>{props.weather}</h1>
                </div>
            </div>

            <div className='thirdRow'>

                <svg className='leftArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
                </svg>

                {hourInfoPosting}

                <svg className='rightArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                </svg>

            </div>
        </div>
    );
}
export default Temperature;

//                <img src={`http://openweathermap.org/img/wn/${props.hourly[0]weather[0].icon}@2x.png`} alt="current weather" ></img>

//<svg className='rightArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>

//<svg className='leftArrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>

/*
//let catagories = ['Shirts', 'Pants', 'Hats', 'Briefs'];
let homeContent = catagories.map((types) => {
    return (
      <ProductContainer photos={morePhotos[types]} type={types} key={types}/>
    );
  });


  return (
    <HashRouter className='higher'>
      <div className="App">

        <header className="App-header">
          <MainNav />
        </header>
        <Switch>

          <Route exact path="/">
            <div>
              <HomePicture />
              {homeContent}
              {
              <ProductContainer photos={morePhotos.shirts} type='Shirts' />
              <ProductContainer photos={morePhotos.pants} type='Pants' />
              <ProductContainer photos={morePhotos.hats} type='Hats' />
*/

