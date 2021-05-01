import BackendService from './backend-service';

// service object that will hold the service methods
const BusinessService = {};

BusinessService.getCities =  async function () {
    // get List of available Cities from the backend
    const resCities = await BackendService.callGET("/city/list");

    // get a list only with Names, to be displayed    
    const cityList = [];
    resCities.forEach(city => {
        cityList.push(city.name);
    });

    return cityList;
}

BusinessService.getWeekForecast =  async function (city) {
    // get forecast for provided city frombackend
    const resForecast = await BackendService.callGET("/forecast/week");

    return resForecast;
}

export default BusinessService;
