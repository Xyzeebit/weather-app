import bgImage from '../assets/thunderstorm.jpg';

export default function Home() {
    return (
        <div style={{backgroundImage: `url(${bgImage})` }}>
            <h1>Real Time Weather App</h1>
        </div>
    );
}