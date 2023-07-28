import PropsType from 'prop-types';
import { useState } from 'react';
import Loader from './Loader';

import stormImage from '../assets/storm.png';
import locationImage from '../assets/location.png';
import timeIcon from '../assets/moon-dark.png'
import humidityIcon from "../assets/humidity.png";
import tempIcon from "../assets/temperature.png";
import tempFeelsIcon from '../assets/hot.png'
import windIcon from "../assets/wind.png";
import visibilityIcon from "../assets/visibility.png";
import sunriseIcon from "../assets/sunset.png";
import sunsetIcon from "../assets/sunset.png";




const WeatherCard = ({ children }) => {
    const [loading] = useState(false);
    if (loading) {
        return (
            <Loader />
        );
    } else {
        return (
            <div className='w-full md:w-4/5 h-80 bg-slate-50 rounded shadow-md mb-8'>
               {children}
            </div>
        );
    }
}

WeatherCard.propTypes = {
    children: PropsType.node.isRequired
}

const CardHeader = ({ city, country, image }) => (
  <div className="flex justify-between items-center overflow-hidden relative border-b-2 border-cyan-600">
    <div className='w-40 h-24'>
      <img
        src={image}
        alt={city}
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
    <div className="pt-2 pr-4">
      <div className="font-thin text-5xl text-red-500 text-right">{city}</div>
      <div className="text-gray-500 pt-2 text-right">{country}</div>
    </div>
  </div>
);

CardHeader.propTypes = {
    city: PropsType.string.isRequired,
    country: PropsType.string,
    image: PropsType.string
}

const TableRow = ({ children }) => <tr className="text-sm">{children}</tr>;

TableRow.propTypes = {
  children: PropsType.node.isRequired
}

const TableItems = ({ weather, multiple }) => (
  <>
    <td className="border p-2 text-center text-gray-600">
      {multiple ? weather.datetime : weather.time}
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.temperature} ℃
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.feelslike} ℃
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.humidity}%
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.windspeed} kmh
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.visibility}%
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.sunrise ? weather.sunrise + " AM" : "N/A"}
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.sunrise ? weather.sunrise + " PM" : "N/A"}
    </td>
  </>
);

TableItems.propTypes = {
  weather: PropsType.object.isRequired,
  multiple: PropsType.bool.isRequired
}

const TableIcons = () => (
  <>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={timeIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={tempIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={tempFeelsIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={humidityIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={windIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={visibilityIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={sunriseIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
    <td className="border border-gray-500 bg-gray-100 px-4 py-2">
      <img src={sunsetIcon} alt="" width={20} height={20} className="m-auto" />
    </td>
  </>
);

const WeatherInfoMain = ({ location, weather }) => {
  return (
    <div className="bg-white px-4 md:px-24 py-1 md:py-8 md:flex md:justify-between md:items-start border-box">
      <div className="md:w-1/3">
        <div>
          <img src={stormImage} alt={weather.icon} width={250} height={180} className='m-auto' />
          <div className="mt-4">
            <span className="font-bold text-red-400">Feels like</span>
            <span className="font-bold text-5xl md:text-6xl text-gray-600">
              {weather.feelslike}°C
            </span>
          </div>
        </div>
        <div className="pt-4 md:pt-8 lg:pt-4 md:w-64 leading-tight">
          <div className="font-bold text-2xl text-gray-600 border-t border-t-2">
            {weather.description}
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-2/3 lg:w-10/12">
        <div className="flex-row">
          <div className="flex items-center justify-end">
            <img
              src={locationImage}
              alt={location.city}
              width={30}
              height={50}
            />
            <div className="text-red-400 font-light text-2xl md:text-3xl pl-2">
              {location.city}
            </div>
          </div>
          {location.country && (
            <div className="text-sm text-blue-400 text-right">
              {location.country}
            </div>
          )}
        </div>

        <div className="pt-10 md:ml-10 lg:ml-0 w-full overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <TableRow>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Time
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Temperature
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Feels like
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Humidity
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Wind speed
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Visibility
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Sun rise
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Sun set
                </th>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableIcons />
              </TableRow>
              <TableRow>
                <TableItems weather={weather} multiple={false} />
              </TableRow>
              {weather?.hours.length > 0 && (
                <>
                  {weather.hours.map((weather, i) => {
                    if (i > 4) return;
                    return (
                      <TableRow key={weather.id}>
                        <TableItems weather={weather} multiple={true} />
                      </TableRow>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

WeatherInfoMain.propTypes = {
  location: PropsType.object,
  weather: PropsType.object
}

export { WeatherCard, CardHeader, WeatherInfoMain };