import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchWeatherReport } from "../libs";
import { updateWeather, updateSearch } from "../redux/weatherSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [search, setSearch] = useState(false);

  const handleOnChange = ({ target }) => {
    setCity(target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (city.length >= 3) {
      setSearch(true);
      dispatch(updateSearch({ searching: true }));
    }
  }

  useEffect(() => {
    async function fetchData() {
      const result = await fetchWeatherReport(city);
      dispatch(updateWeather(result));
      setCity('');
      setSearch(false);
    }
    if (search) {
      fetchData();
    }
  }, [dispatch, city, search]);

  return (
    <form className="flex items-center justify-center w-4/5 md:1/2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleOnChange}
        placeholder="Enter city name for weather report"
        className="pl-6 w-full lg:w-1/2 h-12 rounded-full appearance-none border-2 text-gray-700 leading-tight bg-gray-100 focus:bg-white focus:outline-none focus:shadow-outline focus:border-blue-500"
      />
    </form>
  );
}

export default SearchBox;