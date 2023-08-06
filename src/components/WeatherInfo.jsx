import PropsType from 'prop-types';

// import stormImage from '../assets/storm.png';
import locationImage from '../assets/location.png';
import timeIcon from '../assets/clock.png'
import humidityIcon from "../assets/humidity.png";
import tempIcon from "../assets/temperature.png";
import tempFeelsIcon from '../assets/hot.png'
import windIcon from "../assets/anemometer.png";
import visibilityIcon from "../assets/visibility.png";
import sunriseIcon from "../assets/sunrise.png";
import sunsetIcon from "../assets/sunset.png";
import airPressureIcon from "../assets/air.png";



const WeatherCard = ({ children }) => {
   return (
     <div className="w-full md:w-4/5 bg-slate-50 rounded shadow-md mb-10">
       {children}
     </div>
   );
}

WeatherCard.propTypes = {
    children: PropsType.node.isRequired
}

const WeatherCardTemperature = ({ temperature, time, icon }) => (
  <div className="flex items-center justify-start py-8">
    <img src={`/icons/${icon}.svg`} alt="" width={150} height={200} />
    <div className="">
      <div className="font-extrabold text-6xl text-blue-500">
        {temperature}°C
      </div>
      <div className="font-bold text-xl text-center text-red-400 p-1 mt-10 bg-gray-200 rounded-lg">
        {time}
      </div>
    </div>
  </div>
);
WeatherCardTemperature.propTypes = {
  temperature: PropsType.number.isRequired,
  time: PropsType.string,
  icon: PropsType.string
};

const WeatherCardFooter = ({ conditions }) => (
  <div className='bg-blue-600 text-white px-8 py-4 font-light text-lg'>{conditions}</div>
);
WeatherCardFooter.propTypes = {
  conditions: PropsType.string.isRequired
}

const WeatherTable = ({ weather }) => (
  <div className="text-gray-500 flex-grow w-full md:w-auto">
    <div className="flex items-center justify-between border-b-2 py-2 px-8">
      <div className="inline-flex">
        <img src={tempFeelsIcon} alt="" width={20} height={20} />
        <span className="pl-4">Feels Like</span>
      </div>
      <span>{weather.feelslike}°C</span>
    </div>
    <div className="flex items-center justify-between border-b-2 py-2 px-8">
      <div className="inline-flex">
        <img src={windIcon} alt="" width={20} height={20} />
        <span className="pl-4">Wind</span>
      </div>
      <span>{weather.windspeed} kmh</span>
    </div>
    <div className="flex items-center justify-between border-b-2 py-2 px-8">
      <div className="inline-flex">
        <img src={humidityIcon} alt="" width={20} height={20} />
        <span className="pl-4">Humidity</span>
      </div>
      <span>{weather.humidity}%</span>
    </div>
    <div className="flex items-center justify-between border-b-2 py-2 px-8">
      <div className="inline-flex">
        <img src={airPressureIcon} alt="" width={20} height={30} />
        <span className="pl-4">Pressure</span>
      </div>
      <span>{weather.pressure} mb</span>
    </div>
    <div className="flex items-center justify-between py-2 px-8">
      <div className="inline-flex">
        <img src={visibilityIcon} alt="" width={20} height={20} />
        <span className="pl-4">Visibility</span>
      </div>
      <span>{weather.visibility} km</span>
    </div>
  </div>
);
WeatherTable.propTypes = {
  weather: PropsType.object.isRequired
}

const WeatherCardBody = ({ children }) => (
  <div className='flex flex-col md:flex-row items-center justify-start gap-8'>{children}</div>
);

WeatherCardBody.propTypes = {
  children: PropsType.node.isRequired
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
      {weather.visibility} km
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.sunrise ? weather.sunrise + " AM" : "--"}
    </td>
    <td className="border p-2 text-center text-gray-600">
      {weather.sunrise ? weather.sunrise + " PM" : "--"}
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
          <img src={`/icons/${weather.icon}.svg`} alt={weather.icon} width={250} height={180} className='m-auto' />
          <div className="mt-4 flex flex-col">
            <span className="font-bold text-red-400">Feels Like</span>
            <span className="font-bold text-5xl md:text-6xl text-blue-500">
              {weather.feelslike}°C
            </span>
          </div>
        </div>
        <div className="pt-4 md:pt-8 lg:pt-4 md:w-64 leading-tight">
          <div className="font-light text-xl text-gray-600 border-t-2">
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
                  Feels Like
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Humidity
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Wind Speed
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Visibility
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Sun Rise
                </th>
                <th className="border border-blue-500 bg-gray-200 px-4 py-2">
                  Sun Set
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
                  {weather.hours.map((weather) => {
                    // current hour
                    const d = new Date();
                    const s = d.toISOString().split("T")[1];
                    const t = s.substring(0, s.lastIndexOf("."));

                    if (weather.datetime >= t) {
                      return (
                        <TableRow key={weather.id}>
                          <TableItems weather={weather} multiple={true} />
                        </TableRow>
                      );
                    }
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

export { WeatherCard, WeatherCardTemperature, WeatherCardFooter, WeatherTable, WeatherCardBody, WeatherInfoMain };