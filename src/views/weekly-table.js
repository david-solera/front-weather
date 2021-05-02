import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import DayForecast from './day-forecast';


const WeeklyTable = (props) => {
  // array with days of week to be displayed
  const daysOfWeek = ['Sunday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const renderTable = () => {
    if (props.city !== "") {
      // display Table if city is selected
      return  (     
      <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {props.forecast.map((day) => (
              <TableCell key={'Header_' + day.date}>
                { daysOfWeek[new Date(day.date).getDay()]}
                <br></br>
                {day.date.substring(0,10)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Forecast</TableCell>
            {props.forecast.map((day) => (
              <TableCell key={'Forecast_' + day.date}>
                <DayForecast 
                  image={"/images/icon_" + day.summary.toLowerCase() + ".png"}
                  text={day.summary}>
                </DayForecast>
              </TableCell>
            ))}
          </TableRow>          
          <TableRow>
            <TableCell>Temp Max.</TableCell>
            {props.forecast.map((day) => (
              <TableCell key={'maxtemp_' + day.date}>
                {day.temp.max} &#8451;
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Temp Min.</TableCell>
            {props.forecast.map((day) => (
              <TableCell key={'mintemp_' + day.date}>
                {day.temp.min} &#8451;
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>% Rain</TableCell>
            {props.forecast.map((day) => (
              <TableCell key={'rain_' + day.date}>
                {Math.floor(day.rainProb * 100)} %
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>);
    } 
  }

  return (
    <div className="main-cointainer">
      <h2>Forecast for: {props.city}</h2> 
      {renderTable()}
    </div>
  )
}

export default WeeklyTable;