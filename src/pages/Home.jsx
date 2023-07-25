import AppTitle from '../components/AppTitle';
import SearchBox from '../components/SearchBox';
import WeatherInfoList from '../components/WeatherInfoList';

export default function Home() {
    return (
      <div className="p-6">
        <AppTitle />
        <SearchBox />
        <WeatherInfoList />
      </div>
    );
}