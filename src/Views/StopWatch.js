import React, { useRef, useState } from 'react';

const StopWatch = () => {
    
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)

    function handleStart () {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        },10)
    }

    function handleStop() {
        clearInterval(intervalRef.current)
    }
    let secondPassed = 0;
    if(startTime !== null && now !== null){
        secondPassed = (now - startTime) / 1000
    }


  return (
    <div className='bg-emerald-500 justify-center p-5'>

        <h1 className='text-white text-2xl'>TIme Passed: {secondPassed.toFixed(3)}</h1>
        <button onClick={handleStart}className='hover:bg-white hover:text-black p-3 bg-black
        text-white'>Start</button>
        <button onClick={handleStop} className='hover:bg-white hover:text-black p-3 bg-black
        text-white'>Stop</button>
      
    </div>
  )
}
export default StopWatch
