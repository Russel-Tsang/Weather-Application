import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import Conversions from './components/conversions';
import Weather from './components/weather';

export default class App extends Component {
  state = {
    city_name: undefined,
    country_name: undefined,
    temperature: undefined,
    description: undefined,
    fahrenheit: true,
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
    const api_call = await fetch(`${api_link}&appid=${api_key}&units=imperial`);

    // store JSON into 'response' variable
    const response = await api_call.json();

    // check if fahrenheit state is true before setState of temperature 
    if (response.main !== undefined) {
      var temperature = this.state.fahrenheit ? Math.round(response.main.temp) : Math.round((response.main.temp - 32) * (5 / 9));
    }

    console.log(response);

    // set state based on 'response' JSON values ; first check if response.sys exists to prevent error message
    if (response.sys && city && country) {
      this.setState({
        city_name: response.name,
        country_name: response.sys.country,
        temperature: temperature,
        description: response.weather[0].description
      })
    }
    else this.setState({ error: "Error: Please enter a city and country" });
  }

  // change between fahrenheit and celcius based on argument (passed in from conversions component)
  changeUnits = (units) => {
    // convert to celcius
    if (this.state.fahrenheit && units === 'C') this.setState({ fahrenheit: false });
    // check: [state.temperature exists to prevent NaN], [state.fahrenheit is true], [user wants to convert to Celcius]
    if (this.state.temperature && this.state.fahrenheit && units === 'C') {
      let temperature = this.state.temperature;
      temperature = Math.round((temperature - 32) * (5 / 9));
      this.setState({ temperature })
    }

    // convert to fahrenheit
    if (!this.state.fahrenheit && units === 'F') this.setState({ fahrenheit: true })
    // check: [state.temperature exists to prevent NaN], [state.fahrenheit is false], [user wants to convert to Fahrenheit]
    if (this.state.temperature && !this.state.fahrenheit && units === 'F') {
      let temperature = this.state.temperature;
      temperature = Math.round((temperature * (9 / 5)) + 32);
      this.setState({ temperature });
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Form
          loadWeather={this.getWeather}
        />
        <Conversions
          changeUnits={this.changeUnits}
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
