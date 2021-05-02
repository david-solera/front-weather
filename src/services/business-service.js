import BackendService from './backend-service';

// service object that will hold the service methods
const BusinessService = {};

BusinessService.getCities =  async function () {
    // get List of available Cities from the backend
    const resCities = await BackendService.callGET("/city/list");
    
    return resCities?resCities:[];
}

BusinessService.getWeekForecast =  async function (city) {
    // get forecast for provided city frombackend
    const body= {city: city};
    const resForecast = await BackendService.callPOST("/forecast/week", body);

    return resForecast?resForecast:[];
}

BusinessService.getDayForecast =  async function (city) {
    // get forecast for provided city frombackend
    const body= {city: city};
    const resForecast = await BackendService.callPOST("/forecast/day", body);

    return resForecast?resForecast:[];;
}

BusinessService.getCurrentWeather =  async function (city) {
    // get current weather for provided city frombackend
    const body= {city: city};
    const resWeather = await BackendService.callPOST("/forecast/current", body);

    return resWeather?resWeather:{};
}

export default BusinessService;
