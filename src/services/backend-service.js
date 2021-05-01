import backendURL from './../config/config';

// service object that will be used to connect to the backend
const BackendService = {};

// Call a Rest API in the backend via GET
BackendService.callGET =  async function (urlService) {
    // call the provided URL
    //fetch(backendURL + urlService).then(res => res.json()).then((data) => {
    const res = await fetch("http://127.0.0.1:1234/city/list");
    const resJSON = await res.json();
    return resJSON.data;
}

// Call a Rest API in the backend via POST
BackendService.callPOST =  function (url, body) {
    
}

export default BackendService;
