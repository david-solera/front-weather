import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Cities from './views/cities';
import Header from './views/common/header';
import MenuOptions from './views/common/menu-options';
import CurrentWeather from './views/current';
import DailyForecast from './views/daily';
import Home from './views/home';
import WeeklyForecast from './views/weekly';


function App() {
  return (
    <div>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header></Header>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <MenuOptions></MenuOptions>
            </Grid>
            <Grid item xs={10}>
              <Switch>
                  <Route path="/current">
                    <CurrentWeather />
                  </Route>
                  <Route path="/cities">
                    <Cities />
                  </Route>
                  <Route path="/weekly">
                    <WeeklyForecast />
                  </Route>
                  <Route path="/daily">
                    <DailyForecast />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default App;
