import {  WeatherCard, WeatherCardBody, WeatherCardTemperature, WeatherConditions, WeatherInfoMain, WeatherTable } from "./WeatherInfo";
import { getLocation, getMainWeatherFromDays } from "../libs";
import { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const WeatherInfoList = () => {
  const [loading, setLoading] = useState(true);
  const { city, country } = getLocation();
  const data = getMainWeatherFromDays();

  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <SkeletonLoader />
    );
  } else {
    return (
      <>
        <WeatherInfoMain location={{ city, country }} weather={data[0]} />
        <div className="mt-10 flex flex-col justify-center items-center">
          {data.map((weather, i) => {
            if (i !== 0) {
              return (
                <WeatherCard key={weather.id}>
                  <WeatherCardBody>
                    <WeatherCardTemperature
                      temperature={weather.temperature}
                      time={weather.datetime}
                      icon={weather.icon}
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
}

export default WeatherInfoList;