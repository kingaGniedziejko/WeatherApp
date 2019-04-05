//---Paste to destination .js ---  
//import currentWeather from 'current'

export default function currentWeather(objectData){
    console.log(objectData);
    var appID = "0e3713180683cf2f0424d6d8a2c2ebe2";
    let city = 'miami';
    let units = 'metric'

    var tempVal = document.querySelector('#temp-val');
    var tempUnit = document.querySelector('#temp-unit');
    var tempUnitChange = document.querySelector('#temp-unit-change');
    var sky = document.querySelector('#sky');
    var infoList = document.querySelector('#info-list');
    var iconCode;


    var url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${appID}`);
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            tempVal.textContent = data.main.temp;
            sky.textContent = data.weather[0].description;
            iconCode = data.weather[0].icon;
            infoList.innerHTML =
            `
                <li>Feels Like ${data.main.temp}°C</li>          
                <li>Pressure ${data.main.pressure} hPa</li>
                <li>Humidity ${data.main.humidity}%</li>
                <li>Wind ${data.wind.speed} m/s</li>    
                <li>Wind direction ${data.wind.deg}°</li>
            `;
        });

    //Changing unit
    tempUnitChange.click(fun  => {
        var temp = 1*tempVal.textContent;
        var unit = tempUnit.textContent;
        var unitAlt = tempUnitChange.textContent;

        if (unit === "°C"){
            temp = temp * 9 / 5 + 32;
        } else{
            temp = (temp - 32) * 5 / 9;
        }
        
        tempVal.textContent = temp;
        tempUnit.textContent = unitAlt;
        tempUnitChange.textContent = unit;
    });   
}

currentWeather("a");