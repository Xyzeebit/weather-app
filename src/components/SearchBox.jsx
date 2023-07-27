import { useState } from "react";
// import searchIcon from '../assets/search.svg';

const SearchBox = () => {
    const [value, setValue] = useState('');
    const handleOnChange = ({ target }) => {
        setValue(target.value);
    }
    const handleSubmit = (evt) => {
      evt.preventDefault();
    }
    return (
      <form className="flex items-center justify-center w-4/5 md:1/2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="Enter city to get weather"
          className="pl-4 w-full lg:w-1/2 md:h-12 rounded-md appearance-none border-2 py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
      </form>
    );
}

export default SearchBox;