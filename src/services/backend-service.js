import config from './../config/config';

// service object that will be used to connect to the backend
const BackendService = {};

// Call a Rest API in the backend via GET
BackendService.callGET =  async function (urlService) {

    try {
        // call the provided URL
        const res = await fetch(config.backendURL + urlService);
        const resJSON = await res.json();
        return resJSON.data;
    } catch (error) {
        alert('ERROR: Call to REST API <'  + config.backendURL + urlService + '> was not successful.');
        return null;
    }

}

// Call a Rest API in the backend via POST
BackendService.callPOST =  async function (urlService, body) {
    // set options
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    // call the provided URL
    try {
        const res = await fetch(config.backendURL + urlService, options);
        const resJSON = await res.json();
        return resJSON.data;
    } catch (error) {
        alert('ERROR: Call to REST API <'  + config.backendURL + urlService + '> was not successful.');
        return null;
    }
}

export default BackendService;
