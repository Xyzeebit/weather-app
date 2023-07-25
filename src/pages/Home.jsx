import bgImage from '../assets/thunderstorm.jpg';

export default function Home() {
    return (
      <div
        className="bg-cover bg-center bg-no-repeat h-screen p-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center antialiased text-3xl md:text-4xl lg:text-5xl text-white font-bold pt-8">
          Real Time Weather App
        </h1>
      </div>
    );
}