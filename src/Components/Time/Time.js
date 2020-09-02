import React, { useState } from 'react';

const Time = () => {
    let time = new Date().toLocaleTimeString();
    const [cTime, setTime] = useState(time)

    const updatedTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time)
    };
    setInterval(updatedTime, 1000)
   
    return (
        <div>
            <h1>{cTime}</h1>
        </div>
    );
};

export default Time;