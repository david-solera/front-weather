import { Divider, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { Component } from 'react';
import WeeklyTable from './weekly-table';
import BusinessService from '../services/business-service';

export default class WeeklyForecast extends Component {

  state = {selectedCity: ""};
  cities = [];

  constructor() {
    super();
    // get list of available cities
    this.cities = BusinessService.getCities();
  }

  handleChange = (selectedAge) => {
    console.log('City Selected: ' + selectedAge.target.value);
    // set selected city in state
    this.setState({selectedCity:selectedAge.target.value}); 
  }

  render() {
    return (
      <div>
        <h1>Weekly forecast</h1>
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
              <MenuItem key={city} value={city}>{city}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <Divider />
        <WeeklyTable city={this.state.selectedCity}></WeeklyTable>
      </div>
    );
  }
}