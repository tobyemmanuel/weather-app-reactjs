import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Topleft from './components/Topleft';
import Topright from './components/Topright';
import Bottom from './components/Bottom';


const api = {
  API_URL:"http://api.weatherapi.com/v1/forecast.json",
  API_KEY : "b74ed1d22a254a1f90a50035221103",
  API_DAY_DATA : "5"
}

function App() {
  const [dLocation, setDLocation] = useState('');
  const [WeatherValues, setWeatherValues] = useState({});


  const onChangeLocation = (event) => {
    setDLocation(event.target.value)
  }

  const submittedLocation = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      console.log(dLocation)
    }
  }

  return (
    <div className="weather-app-body">
          <Header
          searchLocation = {dLocation}
          changeLocation = {onChangeLocation}
          onPresskey = {submittedLocation}
          />
    <div className="container pt-4 px-4 ">
        <div className="row main-container px-md-5 px-sm-2 py-md-4 py-sm-2">
           <Topleft/>
            <Topright/>
            <hr className="hr"/>
           <Bottom/>
        </div>
    </div>
    </div>
  );
}

export default App;