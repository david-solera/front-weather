import { Divider, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { Component } from 'react';
import BusinessService from '../services/business-service';
import CurrentWeatherTable from './current-weather-table.js';

export default class CurrentWeather extends Component {

  cities = [];
  forecast = [];

  constructor() {
    super();
    this.state = { selectedCity: "", cities: [], forecast:[] };
  }  
  
  async componentDidMount() {
    // get list of available cities
    this.cities = await BusinessService.getCities();
    this.setState({ selectedCity: "", cities: this.cities });
  }

  handleChange = async (event) => {
    console.log('City Selected: ' + event.target.value);
    // set selected city in state
    this.setState({selectedCity:event.target.value});
    // get daily forecast for selected City
    this.forecast = await BusinessService.getCurrentWeather(event.target.value);
    this.setState({forecast:this.forecast});
  }

  render() {
    return (
      <div>
        <h1>Current forecast (LIVE)</h1>
        <Divider />
        <FormControl>
          <InputLabel id="selectCity">Select a City</InputLabel>
          <Select
            labelId="selectCity"
            id="selectCity"
            onChange={this.handleChange}
            value={this.state.selectedCity}
          >
            {this.cities.map((city) => (
              <MenuItem key={city.cityid} value={city.name}>{city.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <Divider />
        <CurrentWeatherTable city={this.state.selectedCity} forecast={this.state.forecast}></CurrentWeatherTable>
      </div>
    );
  }
}