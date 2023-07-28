import {  WeatherCard, WeatherCardBody, WeatherCardTemperature, WeatherConditions, WeatherInfoMain, WeatherTable } from "./WeatherInfo";
import { getLocation, getMainWeatherFromDays } from "../libs";

const WeatherInfoList = () => {
  const { city, country } = getLocation();
  const data = getMainWeatherFromDays();

  return (
    <>
      <WeatherInfoMain location={{ city, country }} weather={data[0]} />
      <div className="mt-10 flex flex-col justify-center items-center">
        {data.map((weather, i) => {
          if (i !== 0) {
            console.log(weather)
            return (
              <WeatherCard key={weather.id}>
                <WeatherCardBody>
                  <WeatherCardTemperature
                    temperature={weather.temperature}
                    time={weather.datetime}
                  />
                  <WeatherTable weather={weather} />
                </WeatherCardBody>
                <WeatherConditions conditions={weather.description} />
              </WeatherCard>
            );
          }
        })}
      </div>
    </>
  );
}

export default WeatherInfoList;