import BackendService from './backend-service';

// service object that will hold the service methods
const BusinessService = {};

BusinessService.getCities =  async function () {
    // get List of available Cities from the backend
    const resCities = await BackendService.callGET("/city/list");

    return resCities;
}

BusinessService.getWeekForecast =  async function (city) {
    // get forecast for provided city frombackend
    const body= {city: city};
    const resForecast = await BackendService.callPOST("/forecast/week", body);

    return resForecast;
}

export default BusinessService;
