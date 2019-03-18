import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Forecast from './Forecast';

class App extends Component {
  state = { location: '', data: [], city: '' }

  // var apiCall = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2c69078aa63438e84c69ae497d4763bc';

  ComponentDidMount = async () => {
    const weather = await axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=brisbane&APPID=2c69078aa63438e84c69ae497d4763bc')
    this.setState({ data: weather.data })
  }

  checkWeather = async (search) => {
    try {
      const weather = await axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + search + '&APPID=2c69078aa63438e84c69ae497d4763bc')
      this.setState({ data: weather.data, city: weather.data.city.name })
    } catch(err) {
      return console.log(err)
    } 
  }
  
  render() {
    if(this.state.data.length === 0) {
      return (
        <div className="container">
          <h2>6 Day Weather Forcast</h2>
          <SearchBar 
            onSubmit={this.checkWeather}
            updateSearch={this.newSearch}
            content={this.state.location}
          />
      </div>
      );
    }else {
      return (
        <div className="container">
          <h2>6 Day Weather Forcast</h2>
          <SearchBar 
            onSubmit={this.checkWeather}
            updateSearch={this.newSearch}
            content={this.state.location}
          />
          <h1>{this.state.city}, {this.state.data.city.country}</h1>
          <div className="row">
            <Forecast 
              data={this.state.data}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
