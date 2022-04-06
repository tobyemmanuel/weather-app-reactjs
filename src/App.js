import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Topleft from './components/Topleft';
import Topright from './components/Topright';
import Bottom from './components/Bottom';

const api = {
  API_URL: "http://api.weatherapi.com/v1/forecast.json",
  API_KEY: "b74ed1d22a254a1f90a50035221103",
  API_DAY_DATA: "5"
}

function App() {
  const [dLocation, setDLocation] = useState('London');
  const [locationValues, setLocationValues] = useState({});
  const [forecastValues, setForecastValues] = useState({});
  const [currentValues, setCurrentValues] = useState({});
  const [defaultLocation, setDefault] = useState(true);
  const monthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const pad = (num) => {
    var numstr = num.toString();
    if (num < 10) numstr = "0" + numstr;
    return numstr;
  }

  const onChangeLocation = (event) => {
    setDefault(false);
    var newLocation = event.target.value;
    setDLocation(newLocation);
    console.log(defaultLocation)
  }

  const submittedLocation = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (dLocation.length > 2) {
        // setLocationValues({});
        fetchData();
      } else {
        alert('Please insert a valid location.')
      }

    }
  }

  const fetchData = () => {
    setDefault(false);
    fetch(`${api.API_URL}?key=${api.API_KEY}&q=${dLocation}&days=${api.API_DAY_DATA}`)
      .then(response => response.json())
      .then(data => {
        if (data.error !== undefined && data.error.code !== undefined) {
          alert(data.error.message);
          setDLocation('London');
        } else {
          setLocationValues({
            status: 1,
            ...data.location
          });
          setCurrentValues({
            status: 1,
            ...data.current
          });
          setForecastValues({
            status: 1,
            ...data.forecast
          });
        }
      });


  }

  useEffect(() => {
    fetchData();
    console.log(locationValues)
  }, [locationValues.status, defaultLocation])

 

  return (
    <div className="weather-app-body">
          <Header
          searchLocation = {dLocation}
          changeLocation = {onChangeLocation}
          onPresskey = {submittedLocation}
          />
    <div className="container pt-4 px-4 ">
        <div className="row main-container px-md-5 px-sm-2 py-md-4 py-sm-2">
           <Topleft
           locationData = {locationValues}
           padding = {pad}
           monthText = {monthText}
           />
            <Topright
            currentData = {currentValues}
            />
            <hr className="hr"/>
           <Bottom
           forecastData = {forecastValues}
           />
        </div>
    </div>
    </div>
  );
}

export default App;