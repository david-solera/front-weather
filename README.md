# front-weather
Front End for Weather Forecast Application
Provides a simple web interface for a Weather Forecast application.

Installation
- Install dependencies: npm i
- Run (local): npm run start:local

Currently deployed on Heroku platform, available in https://front-weather.herokuapp.com/

The following main options are available:

**Home page**: Main entry point to the web application

**Cities**: Present a list of available cities in the application, with their details.

**Weekly Forecast**: Provide the weather forecast of the next week for a selected city.

**Daily Forecast**: Provide the hourly forecast (next 48 hours) of the current day for a selected city.

**Current Weather**: Provide the instant weather for a selected city. Automatic refresh.

**ARQUITECTURE**
Web application created with React framework.
Use of Material React library to include already created components.
Use of "Service" classes to connect and get data from backend application:
  Component -> Bussines Service -> Backend Service

**TO BE IMPROVED**
- React Architecture, and project structure
- Increase refresh time for performance purpose. Current refresh time if 2 seconds
- Include a interface to Add a new City in the system (database)
- Styles
- Check compatibilty with mobile devices (responsiveness...)
- ...
 
