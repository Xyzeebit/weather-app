import weather from '../data.json';
import rainCloud from '../assets/rain.png'
import cloudyCloud from '../assets/cloudy.png'
import partlyCloud from '../assets/cloud.png'
import clearDay from '../assets/clear-day.png' // use sun image
import clearNight from '../assets/clear-night.png'
import thunderStorm from '../assets/storm.png'

export async function fetchWeatherReport(place) {
    const URL = '';
    try {
        const resp = await fetch(URL);
        if (resp.ok) {
            const data = await resp.json();
            // check if response data object contains weather report
            return { ok: true, data };
        } else {
            return { ok: false, error: 'cannot find weather report for ' + place };
        }
    } catch (err) {
        return { ok: false, error: 'unable to connect, please try again' };
    }
}

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
 * normalizeDate function converts a date string into a month and day string
 * @param {String} date 
 * @returns {String}
 */
function normalizeDate(date) {
    const [y, d, m] = date.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = m.startsWith('0') ? m.substring(1) : m;
    const str = `${months[month - 1]}, ${d}`;
    return str;
}

function iconImage(icon) {
    const s = icon.toLowerCase();
    if (s === 'rain') {
        return rainCloud;
    }
    if (s === 'cloudy') {
        return cloudyCloud;
    }
    if (s.startsWith('partly')) {
        return partlyCloud;
    }
    if (s === 'clear-day') {
        return clearDay;
    }
    if (s == 'clear-night') {
        return clearNight;
    }
    return thunderStorm;
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
    w["time"] = d.getHours() + ':00:00';
    w["datetime"] = wea.datetime;
    w["temperature"] = wea.temp;
    w["feelslike"] = wea.feelslike;
    w["dew"] = wea.dew;
    w["humidity"] = wea.humidity;
    w["windspeed"] = wea.windspeed;
    w["pressure"] = wea.pressure;
    w["cloudcover"] = wea.cloudcover;
    w["visibility"] = wea.visibility;
    w["uvindex"] = wea.uvindex;
    w["sunrise"] = wea.sunrise ?? weather.days[0].sunrise;
    w["sunset"] = wea.sunset ?? weather.days[0].sunset;
    w["conditions"] = wea.conditions;
    w["description"] = wea.description;
    w["icon"] = iconImage(wea.icon);

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
