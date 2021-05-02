import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import DayForecast from './day-forecast';


const DailyTable = (props) => {

  const renderTable = () => {
    if (props.city !== "") {
      // display Table if city is selected
      return  (     
      <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {props.forecast.map((hour) => (
              <TableCell>
                {hour.date.substring(0,10)}
                <br></br>
                {hour.time}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Forecast</TableCell>
            {props.forecast.map((hour) => (
              <TableCell>
                <DayForecast 
                  image={"/images/icon_" + hour.summary.toLowerCase() + ".png"}
                  text={hour.summary}>
                </DayForecast>
              </TableCell>
            ))}
          </TableRow>          
          <TableRow>
            <TableCell>Temp</TableCell>
            {props.forecast.map((hour) => (
              <TableCell>
                {hour.temp} &#8451;
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>% Rain</TableCell>
            {props.forecast.map((hour) => (
              <TableCell>
                {Math.floor(hour.rainProb * 100)} %
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
      <h2>Daily Forecast for: {props.city}</h2> 
      {renderTable()}
    </div>
  )
}

export default DailyTable;