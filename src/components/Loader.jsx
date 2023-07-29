import { useState } from "react";

const Loader = () => {
    const [loading, setLoading] = useState('true');

    setTimeout(() => {
        setLoading(false);
    }, 5000);

    if (loading) {
        return (
            <div className="loader bg-gray-200 p-4 ">
                <div className="spin border-4 border-blue-500 border-t-4 border-t-white rounded-full w-8 h-8 m-auto" />
            </div>
        );
    } else {
        return <></>
    }
}

export default Loader;