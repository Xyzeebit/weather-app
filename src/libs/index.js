import weather from '../data.json';

/**
 * getLocation function parses the weather json data and returns the current 
 * searched location
 * @returns {object}
 */
export function getLocation() {
    const [city, country] = weather.resolvedAddress.split(',');
    return {city, country};
}

/**
 * getWeatherReport function takes an object, parses it for a weather
 * report and recursively calls itself for every hour object found in each days report
 * @param {object} wea - weather JSON object parameter
 * @returns {object} it returns an object containing the weather report
 */
function getWeatherReport(wea) {
    const w = {};
    const d = new Date(wea.datetimeEpoch);

    w["id"] = wea.datetimeEpoch;
    w["time"] = d.getHours() + ' : ' + d.getMinutes();
    w["datetime"] = wea.datetime;
    w["temperature"] = wea.temp;
    w["dew"] = wea.dew;
    w["humidity"] = wea.humidity;
    w["windspeed"] = wea.windspeed;
    w["pressure"] = wea.pressure;
    w["cloudcover"] = wea.cloudcover;
    w["visibility"] = wea.visibility;
    w["uvindex"] = wea.uvindex;
    w["sunrise"] = wea.sunrise;
    w["sunset"] = wea.sunset;
    w["conditions"] = wea.conditions;
    w["description"] = wea.description;
    w["icon"] = wea.icon;

    if (wea.hours && wea.hours.length > 0) {
        w["hours"] = [];
        for (let wh of wea.hours) {
            const report = getWeatherReport(wh);
            w.hours.push(report);
        }
    }

    return w;
}

/**
 * getMainWeatherFromDays function parses the weather object for a weather report and
 * returns an array of weather report objects
 */
export function getMainWeatherFromDays() {
    const days = [];
    for (let w of weather.days) {
        const report = getWeatherReport(w);
        days.push(report);
    }
    return days;
}
