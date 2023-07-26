import weather from '../data.json';

/**
 * getLocation function parses the weather json data and returns the current 
 * searched location
 * @returns {object}
 */
export function getLocation() {
    const [city] = weather.resolvedAddress.split(',');
    return {city};
}

/**
 * getDays function parses the weather json data and return the days containing 
 * weather results
 * @returns {Array}
 */
export function getDays() {
    const days = weather.days;
    return days;
}