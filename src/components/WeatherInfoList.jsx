import {
  WeatherCard,
  WeatherCardBody,
  WeatherCardTemperature,
  WeatherConditions,
  WeatherInfoMain,
  WeatherTable
} from "./WeatherInfo";
import { fetchWeatherReport, getLocation } from "../libs";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateWeather } from "../redux/weatherSlice";
import SkeletonLoader from "./SkeletonLoader";
import Error from "./Error";

const WeatherInfoList = () => {
  const { loading, error, data } = useSelector(state => state.weather);
  const dispatch = useDispatch();
  const [{ city, country }, setLocation] = useState({ city: '', country: '' });

  useEffect(() => {
    async function fetchData() {
      const result = await fetchWeatherReport("berlin");
      dispatch(updateWeather(result));
    }

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setLocation(getLocation(data))
    }
  }, [data]);
 
  if (loading) {
    return (
      <SkeletonLoader />
    );
  } else if (error) {
    return (
      <Error message={error} />
    )
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