import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
  state = { location: '', data: [] }

  // var apiCall = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2c69078aa63438e84c69ae497d4763bc';

  checkWeather = async (search) => {
    const weather = await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + search + '&APPID=2c69078aa63438e84c69ae497d4763bc')
    
    this.setState({ data: weather })
    console.log(weather.data.city)
    console.log(this.state.data.data)
  }
  

  render() {
    return (
      <div className="App">
        <SearchBar 
          onSubmit={this.checkWeather}
          updateSearch={this.newSearch}
          content={this.state.location}
        />
      </div>
    );
  }
}

export default App;
