"use client";
import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="text-center mb-8">
            <h1 className="text-7xl mb-4">{count}</h1>
            <button className="py-2 px-10 bg-blue-700 text-white rounded-md mr-5" onClick={handleIncrement}>
                Increment
            </button>
            <button className="py-2 px-10 bg-red-700 text-white rounded-md" onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    );
};

export default State;
