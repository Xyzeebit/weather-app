import { useState } from "react";
// import searchIcon from '../assets/search.svg';

const SearchBox = () => {
    const [value, setValue] = useState('');
    const handleOnChange = ({ target }) => {
        setValue(target.value);
    }
    const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(value)
      setValue('')
    }
    return (
      <form className="flex items-center justify-center w-4/5 md:1/2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="Enter city name for weather report"
          className="pl-4 w-full lg:w-1/2 h-12 rounded-full appearance-none border-2 text-gray-700 leading-tight bg-gray-100 focus:bg-white focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
      </form>
    );
}

export default SearchBox;