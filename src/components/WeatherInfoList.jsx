import {
  WeatherCard,
  WeatherCardBody,
  WeatherCardTemperature,
  WeatherCardFooter,
  WeatherInfoMain,
  WeatherTable
} from "./WeatherInfo";
import { fetchWeatherReport } from "../libs";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateWeather } from "../redux/weatherSlice";
import SkeletonLoader from "./SkeletonLoader";
import Error from "./Error";

const WeatherInfoList = () => {
  const [first, setFirst] = useState(true) // only fetch weather report when page is first loaded
  const { loading, error, data } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await fetchWeatherReport();
      dispatch(updateWeather(result));
    }

    if (first) {
      fetchData();
      setFirst(false);
    }
  }, [dispatch, first]);

  if (loading) {
    return (
      <SkeletonLoader />
    );
  } else if (error) {
    return (
      <Error message={error} />
    );
  } else {
    return (
      <>
        <WeatherInfoMain location={{ city: data.location.city, country: data.location.country }} weather={data.days[0]} />
        <div className="mt-10 flex flex-col justify-center items-center">
          {data.days.map((weather, i) => {
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
                  <WeatherCardFooter conditions={weather.description} />
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