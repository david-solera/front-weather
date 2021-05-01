import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import DayForecast from './day-forecast';

const WeeklyTable = (props) => {
  return (
    <div className="main-cointainer">
      <h2>Forecast for: {props.city}</h2> 
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                Today
                <br></br>
                01/05/2021
              </TableCell>
              <TableCell>
                Sunday
                <br></br>
                02/05/2021
              </TableCell>
              <TableCell>
                Monday
                <br></br>
                03/05/2021 
              </TableCell>
              <TableCell>
                Tuesday
                <br></br>
                04/05/2021 
              </TableCell>
              <TableCell>
                Wednesday
                <br></br>
                05/05/2021 
              </TableCell>
              <TableCell>
                Thursday
                <br></br>
                06/05/2021 
              </TableCell>
              <TableCell>
                Friday
                <br></br>
                07/05/2021 
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Forecast</TableCell>
              <TableCell>
                <DayForecast 
                  image="/images/rain.png"
                  text="Rain">
                </DayForecast>
              </TableCell>
              <TableCell>
                <DayForecast 
                  image="/images/storm.png"
                  text="Storm">
                </DayForecast>
              </TableCell>
              <TableCell>
                <DayForecast 
                  image="/images/cloud.png"
                  text="Cloudy">
                </DayForecast>
              </TableCell>
              <TableCell>
                <DayForecast 
                  image="/images/someclouds.png"
                  text="Some clouds">
                </DayForecast>
              </TableCell>
              <TableCell>
                <DayForecast 
                  image="/images/sun.png"
                  text="Sunny">
                </DayForecast>                
              </TableCell>
              <TableCell>
                <DayForecast 
                  image="/images/sun.png"
                  text="Sunny">
                </DayForecast>                
              </TableCell>
              <TableCell>
                <DayForecast 
                  image="/images/snow.png"
                  text="Snow">
                </DayForecast>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Temp Max.</TableCell>
              <TableCell>18º</TableCell>
              <TableCell>17º</TableCell>
              <TableCell>17º</TableCell>
              <TableCell>19º</TableCell>
              <TableCell>21º</TableCell>
              <TableCell>22º</TableCell>
              <TableCell>20º</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Temp Min.</TableCell>
              <TableCell>10º</TableCell>
              <TableCell>9º</TableCell>
              <TableCell>8º</TableCell>
              <TableCell>10º</TableCell>
              <TableCell>10º</TableCell>
              <TableCell>11º</TableCell>
              <TableCell>10º</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>% Rain</TableCell>
              <TableCell>65%</TableCell>
              <TableCell>85%</TableCell>
              <TableCell>40%</TableCell>
              <TableCell>30º</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>15%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default WeeklyTable;