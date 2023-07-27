import { CardHeader, WeatherCard, WeatherInfoMain } from "./WeatherInfo";
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
            return (
              <WeatherCard key={weather.id}>
                <CardHeader city={city} country={country} />
              </WeatherCard>
            );
          }
        })}
      </div>
    </>
  );
}

export default WeatherInfoList;