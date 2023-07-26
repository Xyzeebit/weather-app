import PropsType from 'prop-types';
import { useState } from 'react';
import Loader from './Loader';

const WeatherCard = ({ children }) => {
    const [loading] = useState(false);
    if (loading) {
        return (
            <Loader />
        );
    } else {
        return (
            <div className='w-full md:w-4/5 h-80 bg-slate-50 rounded shadow-md mb-8'>
               {children}
            </div>
        );
    }
}

WeatherCard.propTypes = {
    children: PropsType.node.isRequired
}

const CardHeader = ({ city, country, image }) => (
  <div className="flex justify-between items-center overflow-hidden relative border-b-2 border-cyan-600">
    <div className='w-40 h-24'>
      <img
        src={image}
        alt={city}
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
    <div className="pt-2 pr-4">
      <div className="font-thin text-5xl text-red-500 text-right">{city}</div>
      <div className="text-gray-500 pt-2 text-right">{country}</div>
    </div>
  </div>
);

CardHeader.propTypes = {
    city: PropsType.string.isRequired,
    country: PropsType.string,
    image: PropsType.string
}

export { WeatherCard, CardHeader };