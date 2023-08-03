import PropsType from 'prop-types';

const Error = ({ message }) => (
  <div className="h-screen bg-white flex items-center justify-center font-bold test-center text-3xl text-gray-500">
    {message}
  </div>
);

Error.propTypes = {
    message: PropsType.string.isRequired
}

export default Error;