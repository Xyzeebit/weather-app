import SearchBox from "./SearchBox";

const Header = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between md:justify-start px-4 md:px-24 py-4 shadow-md text-blue-500 bg-white w-full">
    <div className="flex items-center justify-center font-bold sm:text-2xl md:text-4xl mr-4">
      QWeather
    </div>
    <SearchBox />
  </header>
);

export default Header;