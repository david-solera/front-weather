import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react';
import BusinessService from '../services/business-service';
import DayForecast from './day-forecast';

export default class CurrentWeatherTable extends Component {

  forecast = [];

  constructor() {
    super();
    this.state = { forecast:[] };
  }  

  async componentDidMount() {
    try {
      // get the weather data from REST API periodically
      this.interval = setInterval(async () => {
        // get daily forecast for selected City
        if(this.props.city !== "") {
          this.forecast = await BusinessService.getCurrentWeather(this.props.city);
          this.setState({forecast:this.forecast});  
        }
      }, 2000);
    } catch(e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  renderTable = () => {
    if (this.props.city !== "" && this.state.forecast.date) {
      // display Table if city is selected
      return  (     
      <TableContainer>
      <Table size="medium">
        <TableBody>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>{this.state.forecast.date.substring(0,10)}</TableCell>
          </TableRow>          
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>{this.state.forecast.time}</TableCell>
          </TableRow>          
          <TableRow>
            <TableCell>Weather</TableCell>
            <TableCell>
              <DayForecast 
                image={"/images/icon_" + this.state.forecast.summary.toLowerCase() + ".png"}
                text={this.state.forecast.summary}>
              </DayForecast>
            </TableCell>
          </TableRow>          
          <TableRow>
            <TableCell>Temp</TableCell>
            <TableCell>
              {this.state.forecast.temp} &#8451;
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>% Humidity</TableCell>
            <TableCell>
              {this.state.forecast.humidity} %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wind Speed</TableCell>
            <TableCell>
              {this.state.forecast.wind}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>);
    } 
  }

  render() {
    return (
      <div className="main-cointainer">
        <h2>Current Weather for: {this.props.city}</h2> 
        {this.renderTable()}
      </div>
    )
  }
}
