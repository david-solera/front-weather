import { Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react';
import BusinessService from '../services/business-service';

export default class Cities extends Component {

  cities = [];

  constructor() {
    super();
    this.state = { cities: []};
  }  
  
  async componentDidMount() {
    // get list of available cities
    this.cities = await BusinessService.getCities();
    this.setState({ cities: this.cities });
  }

  render() {
    return (
      <div>
        <h1>List of Available Cities</h1>
        <Divider />
        <br></br>
        <br></br>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>City Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Latitude</TableCell>
                <TableCell>Longitude</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
                this.cities.map((city) => (
                <TableRow key={city.cityid}>
                    <TableCell>{city.name}</TableCell>
                    <TableCell>{city.countrycode}</TableCell>
                    <TableCell>{city.lat}</TableCell>
                    <TableCell>{city.lon}</TableCell>
                </TableRow>          
                ))
            }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}