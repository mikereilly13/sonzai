import React, { useState, useEffect } from "react";

function ClockWidget() {
    const [time, setTime] = useState(null); // Initially null to avoid SSR mismatch

    useEffect(() => {
        // Initialize time on the client
        setTime(new Date());

        // Update the time every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // If time is null (during SSR), render a loading state
    if (!time) {
        return <div className="rounded-lg p-2 text-lg bg-black text-white h-32 w-32 flex items-center justify-center font-semibold shadow-lg">Loading...</div>;
    }

    // Format the time as HH:mm:ss
    const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <div className="rounded-lg p-2 text-lg bg-black text-white h-32 w-32 flex items-center justify-center font-semibold shadow-lg">
            <h1>{formattedTime}</h1>
        </div>
    );
}

export default ClockWidget;
