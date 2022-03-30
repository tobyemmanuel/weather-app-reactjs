import React from 'react'

export default function Topright() {
  return (
    <div className="col-md-5  col-md-offset-1">
    <div className="row">
        <div className="left-side col-md-7">
            <div className="weather-condition">
                <span className="weather-cond-title">Weather Condition</span>
                <div className="weather-text d-flex justify-content-start">
                    <img className="align-self-center img-weather" src="assets/images/sunny.png" alt=""/>
                    <span className="weather-type align-self-center">Sunny</span>
                </div>
            </div>
            <div className="probabilities">
                <p className="rain-chances">Chances of rain: <span className="rain-prob">100%</span></p>
                <p className="snow-chances">Chances of snow: <span className="snow-prob">100%</span></p>
            </div>
        </div>
        <div className="right-side col-md-5">
            <div className="temperature">
                <span className="temp-title">Temperature</span>
                <div className="temp d-flex justify-content-start">
                    <span className="temp-text ">48</span>
                    <span className="temp-deg">o</span>
                    <span className="temp-unit">c</span>
                </div>                            
            </div>
            <div className="wind">
                <span className="wind-title">Wind Condition</span>
                <div className="wind-c d-flex justify-content-start">
                    <span className="wind-text">21</span>
                    <span className="wind-unit">kph</span>
                </div>    
            </div>
        </div>
    </div>
</div>
  )
}
