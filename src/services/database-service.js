// service object that will hold the service methods
const DatabaseService = {};

DatabaseService.getCities =  function () {
    const mockedCities = ['Zaragoza', 'Huesca', 'Teruel'];
    return mockedCities;
}

export default DatabaseService;
