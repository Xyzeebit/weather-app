import bgImage from '../assets/thunderstorm.jpg';
import AppTitle from '../components/AppTitle';
import SearchBox from '../components/SearchBox';

export default function Home() {
    return (
      <div
        className="bg-cover bg-center bg-no-repeat h-screen p-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <AppTitle />
        <SearchBox />
      </div>
    );
}