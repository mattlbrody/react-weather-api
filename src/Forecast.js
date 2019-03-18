
import './Forcast.css';
import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize'

const Forecast = props => {
  // remove the 7th item
  props.data.list.pop();

  const forcast = props.data.list.map((weather) => { 
    if(props.data === undefined) {
      return (
        <div>
          Type in a city or town and press enter
        </div>
      );
    } else {
        // Unixtimestamp
        var unixtimestamp = weather.dt;
        // Months array
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        // Day array
        var day_arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // Convert timestamp to milliseconds
        var date = new Date(unixtimestamp*1000);
        // Month
        var month = months_arr[date.getMonth()];
        // Day of the week
        var dayOfWeek = day_arr[date.getDay()];
        // Day
        var day = date.getDate();
        // Display date time in MM-dd-yyyy format
        var convdataTime = day;

        var weatherImage = '';
        // select image based on api description
        switch(weather.weather[0].description) {
          case 'sky is clear':
            weatherImage = 'http://codifyacademy.com/weatherimages/sun.png'
            break;
          case 'broken clouds': 
            weatherImage = 'http://codifyacademy.com/weatherimages/partlysunny.png'
            break;
          case 'light rain': 
            weatherImage = 'http://codifyacademy.com/weatherimages/lightrain.png'
            break;
          case 'light snow': 
            weatherImage = 'http://codifyacademy.com/weatherimages/snow.png'
            break;
          case 'snow': 
            weatherImage = 'http://codifyacademy.com/weatherimages/snow.png'
            break;
          case 'scattered clouds': 
            weatherImage = 'http://codifyacademy.com/weatherimages/lightclouds.png'
            break;
          case 'heavy intensity rain': 
            weatherImage = 'http://codifyacademy.com/weatherimages/storms.png'
            break;
          case 'moderate rain': 
            weatherImage = 'http://codifyacademy.com/weatherimages/rain.png'
            break;
          default:
            weatherImage = 'http://codifyacademy.com/weatherimages/sun.png'
        }
         
      return (
        <Col s={2} className='grid-example' key={weather.dt}>
          <Card header={<CardTitle image={weatherImage} waves='light'/>}>
            <h5>{dayOfWeek}</h5>
            <h5>{convdataTime}-{month}</h5>
            <p>{weather.weather[0].description}</p>
            <p>high {parseInt((weather.temp.max - 273.15) * 9/5 + 32)}, low {parseInt((weather.temp.min - 273.15) * 9/5 + 32)}</p>
          </Card>
        </Col>
      );
    }
  })

    // return (
    //   <div className="col col-lg-4 grid-wrapper" key={book.id}>
    //     <BookCard 
    //       image={book.volumeInfo.imageLinks.thumbnail}
    //       title={book.volumeInfo.title} 
    //       author={book.volumeInfo.authors[0]} 
    //       description={book.volumeInfo.description}
    //       previewLink={book.volumeInfo.previewLink}
    //       buyLink={book.saleInfo.buyLink}
    //     />
    //   </div>
    // ); 
 
    return (
      <div>
        {forcast}
      </div>
    );
}

export default Forecast;