import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import "./menu-options.css";

export default class MenuOptions extends Component {

    render() {
        return (
        <div>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" href="./">
                Home
            </Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" href="./cities">
                Cities
            </Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" href="./weekly">
                Weekly Forecast
            </Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" href="./daily">
                Daily forecast
            </Button>
        </div>
        );
    }
}
