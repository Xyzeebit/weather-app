import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";


const Header = () => {
  const { searching } = useSelector((state) => state.weather);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between md:justify-start px-4 md:px-24 py-4 shadow-md text-blue-500 w-full">
        <div className="flex items-center justify-center font-bold sm:text-2xl md:text-4xl mr-4">
          Qweather
        </div>
        <SearchBox />
      </div>
      {searching && <div
        aria-busy="true"
        aria-label="Content loading..."
        className="w-full m-auto"
      >
        <div className="h-1 bg-blue-300 w-full overflow-hidden">
          <div className="w-full h-full bg-blue-500 progress" />
        </div>
      </div>}
    </header>
  );
}

export default Header;