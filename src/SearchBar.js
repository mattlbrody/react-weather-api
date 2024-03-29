import React, { Component } from 'react';

class SearchBar extends Component {
  state = { location: '' }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.location)
    this.setState({ location: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            placeholder="type in the name of a city or town and press enter" 
            onChange={e => this.setState({ location: e.target.value })}
            value={this.state.location}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;