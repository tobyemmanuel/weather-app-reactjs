import React from 'react'

export default function Topleft(props) {
    const {
        locationData,
        padding,
        monthText
    } = props

    const dateTime = new Date(locationData.localtime_epoch * 1000);
    var hours = 0;
    var amOrpm = 'am';

    hours = dateTime.getHours();
    amOrpm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;

  return (
    <div className="col-md-6  ">
    <div className="row">
        <div className="col-md-7 col-sm-12 pt-4">
           <h1 className="city">{locationData.name}</h1>
           <h2 className="country">{locationData.country}</h2>
        </div>
        <div className="col-md-5 col-sm-12">
            <div className="time-date align-content-center ">
                <div className="time d-flex justify-content-start p-0">
                    <span className="time-icon align-self-center"><img className="time-icon" src="assets/images/time-icon.png" alt=""/></span>
                    <span className="hour p-0">{padding(hours)}</span>
                    <div className="hour-period d-flex flex-column justify-content-around align-self-center">
                        <span className="mins">{padding(dateTime.getMinutes())}</span>
                        <span className="period">{amOrpm}</span>
                    </div>               
                </div>
                <div className="date d-flex justify-content-start">
                    <span className="date-icon align-self-center"><img className="date-icon" src="assets/images/date-icon.png" alt=""/></span>
                    <span className="date-text align-self-center">{monthText[dateTime.getMonth()]}. {padding(dateTime.getDate())}</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
