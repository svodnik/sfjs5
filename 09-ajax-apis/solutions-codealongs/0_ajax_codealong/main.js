var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
        } else {
            console.log("There was a problem.");
        }
    }
};

httpRequest.open("GET", "http://data.consumerfinance.gov/api/views.json");

httpRequest.send();