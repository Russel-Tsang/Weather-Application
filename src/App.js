import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ProfileCard from './components/profile_card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      title: "Test Title",
      text: "This is a test"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your city: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </header>

        <ProfileCard
          title={this.state.greeting}
        />
      </div>
    );
  }
}

export default App;
