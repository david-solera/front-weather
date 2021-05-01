import DatabaseService from './database-service';

// service object that will hold the service methods
const BusinessService = {};

BusinessService.getCities =  function () {
    // get List of available Cities from the database layer
    return DatabaseService.getCities();
}

export default BusinessService;
