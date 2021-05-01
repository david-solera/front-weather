import { Divider, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { Component } from 'react';
import WeeklyTable from './weekly-table';
import BusinessService from '../services/business-service';

export default class WeeklyForecast extends Component {

  //state = {selectedCity: ""};
  cities = [];

  constructor() {
    super();
    this.state = { selectedCity: "", cities: [] };
  }  
  
  async componentDidMount() {
    // get list of available cities
    this.cities = await BusinessService.getCities();
    this.setState({ selectedCity: "", cities: this.cities });
  }

  handleChange = (event) => {
    console.log('City Selected: ' + event.target.value);
    // set selected city in state
    this.setState({selectedCity:event.target.value});
    // get forecast for selected City
    BusinessService.getWeekForecast(event.target.value);
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