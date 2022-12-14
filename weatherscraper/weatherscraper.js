const maxApi = require("max-api");
// maxApi.outlet("js in da house");

const weather = require('openweather-apis');
weather.setAPPID("613d35f76aeaf8c6373a9fc0142d9731");
weather.setLang('en');
weather.setUnits('imperial');

maxApi.addHandler("los angeles", () => {
    weather.setCity('los angeles');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});


maxApi.addHandler("denver", () => {
    weather.setCity('denver');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("berlin", () => {
    weather.setCity('berlin');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

