import weather from '../data.json';
// import rainCloud from '../assets/rain.png'
// import cloudyCloud from '../assets/cloudy.png'
// import partlyCloud from '../assets/cloud.png'
// import clearDay from '../assets/clear-day.png' // use sun image
// import clearNight from '../assets/clear-night.png'
// import thunderStorm from '../assets/storm.png'

export async function fetchWeatherReport(place) {
    try {
        const apiKey = import.meta.env.VITE_WEATHER_KEY;
        if (!apiKey) {
            throw new Error('No API key provided');
        }
        const today = new Date();
        const from = today.toISOString().split('T')[0];
        today.setDate(today.getDate() + 7);
        const to = today.toISOString().split('T')[0];
        let city = 'Lagos';

        if (place === undefined) {
            let loc = await getDefaultLocation();
            if (loc.ok) {
              city = loc.location.city;
            }
        } else {
            city = place;
        }
        
        const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${from}/${to}?unitGroup=metric&key=${apiKey}&contentType=json`;
        const resp = await fetch(URL);
        if (resp.ok) {
            const data = await resp.json();
            let location = {};
            if (data.resolvedAddress) {
                const { city, country } = getLocation(data.resolvedAddress);
                location = { city, country };
            }
            const days = getMainWeatherFromDays(data);
            // check if response data object contains weather report
            return { ok: true, weather: {days, location} };
        } else {
            return { ok: false, error: 'cannot find weather report for ' + place };
        }
    } catch (err) {
         let location = {};
         if (weather.resolvedAddress) {
           const { city, country } = getLocation(weather.resolvedAddress);
           location = { city, country };
         }
         const days = getMainWeatherFromDays(weather);
         // check if response data object contains weather report
         return { ok: true, weather: { days, location } };
        // return { ok: false, error: 'Unable to connect, please try again' };
    }
}

/**
 * getDefaultLocation function fetches the IP geo-location of the user in other to get 
 * the users city and country
 * @returns {object}
 */
async function getDefaultLocation() {
    try {
        const apiKey = import.meta.env.VITE_GEOAPIFY_KEY;
        if (apiKey) {
            const URL = `https://api.geoapify.com/v1/ipinfo?&apiKey=${apiKey}`
            const resp = await fetch(URL);
            if (resp.ok) {
                const location = {};
                const data = await resp.json();
                location.city = data.city.name;
                location.country = data.country.name;
                return { ok: true, location }
            } else {
                return { ok: false, error: 'Cannot get your location' };
            }
        } else {
            throw new Error('API key not found')
        }
    } catch (err) {
        return { ok: false, error: 'Unable to connect, please try again' };
    }
}

/**
 * getLocation function parses the weather json data and returns the current 
 * searched location
 * @param {object} addr 
 * @returns {object}
 */
export function getLocation(addr) {
    const [city, country] = addr.split(',');
    return { city, country };
}

/**
 * normalizeDate function converts a date string into a month and day string
 * @param {String} date 
 * @returns {String}
 */
function normalizeDate(datetime) {
    if (datetime.indexOf('-') === -1) {
        return datetime;
    }
    const [y, m, d] = datetime.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = m.startsWith('0') ? m.substring(1) : m;
    const str = `${months[month - 1]}, ${d}`;
    return str;
}

function iconImage(icon) {
    const s = icon?.toLowerCase();
    switch (s) {
        case 'snow':
            return;
        case 'snow-showers-day':
            return;
        case 'snow-showers-night':
            return;
        case 'thunder-rain':
            return;
        case 'thunder-showers-day':
            return;
        case 'thunder-showers-night':
            return;
        case 'rain':
            return;
        case 'showers-day':
            return;
        case 'showers-night':
            return;
        case 'fog':
            return;
        case 'wind':
            return;
        case 'cloudy':
            return;
        case 'partly-cloudy-day':
            return;
        case 'partly-cloudy-night':
            return;
        case 'clear-day':
            return;
        case 'clear-night':
            return;
        default:
            return ''
    }
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
    const s = d.toISOString().split("T")[1];
    w["id"] = wea.datetimeEpoch;
    w["time"] = s.substring(0, s.lastIndexOf('.'));
    w["datetime"] = normalizeDate(wea.datetime);
    w["temperature"] = wea.temp;
    w["feelslike"] = wea.feelslike;
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
    w["icon"] = wea.icon; //iconImage(wea.icon);

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
export function getMainWeatherFromDays(weather) {
    const days = [];
    for (let w of weather.days) {
        const report = getWeatherReport(w);
        days.push(report);
    }
    return days;
}
