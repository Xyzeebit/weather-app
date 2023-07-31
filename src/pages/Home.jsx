import Header from '../components/Header';
// import Loader from '../components/Loader';
import WeatherInfoList from '../components/WeatherInfoList';

export default function Home() {
    return (
      <>
        <Header />
        {/* <Loader /> */}
        <WeatherInfoList />
      </>
    );
}