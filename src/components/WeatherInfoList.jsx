import { CardHeader, WeatherCard } from "./WeatherInfo";
import img from '../assets/thunderstorm.jpg';

const WeatherInfoList = () => {
    const data = [
      {
        id: "haj8Han",
        city: "Lagos",
        country: "Nigeria",
        image: img,
      },
      {
        id: "haj8Dan",
        city: "New York",
        country: "USA",
        image: img,
      },
      {
        id: "hahj8Dan",
        city: "London",
        country: "England",
        image: img,
      },
      {
        id: "haxj8Dan",
        city: "Los Angeles",
        country: "Carlifornia, USA",
        image: img,
      },
    ];

    return (
      <div className="md:flex md:flex-wrap justify-center item-center gap-10 mt-10">
        {data.map((weather) => {
          return (
            <WeatherCard key={weather.id}>
              <CardHeader city={weather.city} country={weather.country} image={weather.image} />
            </WeatherCard>
          );
        })}
      </div>
    );
}

export default WeatherInfoList;