import { Divider, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { Component } from 'react';
import DailyTable from './daily-table';
import BusinessService from '../services/business-service';

export default class DailyForecast extends Component {

  //state = {selectedCity: ""};
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
    this.forecast = await BusinessService.getDayForecast(event.target.value);
    console.log('FORECAST:');
    console.log(this.forecast);
    this.setState({forecast:this.forecast});
  }

  render() {
    return (
      <div>
        <h1>Daily forecast</h1>
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
        <DailyTable city={this.state.selectedCity} forecast={this.state.forecast}></DailyTable>
      </div>
    );
  }
}