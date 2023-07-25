import { useState } from "react";
import searchIcon from '../assets/search.svg';

const SearchBox = () => {
    const [value, setValue] = useState('');
    const handleOnChange = ({ target }) => {
        setValue(target.value);
    }
    return (
      <div className="pt-10 flex items-center justify-center">
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="Enter city or post/zip code"
          style={{
            backgroundImage: `url(${searchIcon})`,
            backgroundSize: "30px 30px",
          }}
          className="bg-right bg-no-repeat pl-4 pr-8 w-full md:w-2/5 h-10 md:h-12 rounded-md shadow appearance-none border-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
      </div>
    );
}

export default SearchBox;