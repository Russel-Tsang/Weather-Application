import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';

export default class App extends Component {
  state = {
    city_name: undefined,
    country_name: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined
  }

  // OpenWeatherMap API: Retrieve data  
  getWeather = async (e) => {
    // prevents page from refreshing after the submit event
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    const api_link = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}`;
    const api_key = 'b206e05f1bbf6d521a46b0a11a8438ae';

    const api_call = await fetch(`${api_link}&appid=${api_key}`);
    const response = await api_call.json();

    console.log(response);

    // set state based on response variable
    if (city && country) {
      this.setState({
        city_name: response.name,
        country_name: response.sys.country,
        temperature: response.main.temp,
        description: response.weather[0].description
      })
    }
    else this.setState({ error: "Error: Please enter a city and country" });
  }

  render() {
    return (
      <div>
        <Title />
        <Form
          loadWeather={this.getWeather}
        />
        <Weather
          country_name={this.state.country_name}
          city_name={this.state.city_name}
          temperature={this.state.temperature}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
