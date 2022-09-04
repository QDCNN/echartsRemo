import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as echarts from 'echarts';
function useInterval (callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick () {
      savedCallback.current();
    }
    console.log('delay: ', delay)
    if (delay !== null) {
      let id = setInterval(tick, delay);
      // console.log(id);
      return () => {
        console.log('clear')
        clearInterval(id);
      }
    }
  }, [delay]);
}
const Demo = () => {
  let [count, setCount] = useState(0);
  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => setStatus(1)}>switch</button> */}
    </div>
  );
}
export default function Counter () {
  const [status, setStatus] = useState(0);
  return (
    <div>
      {status == 0 && <Demo />}
      <button onClick={() => setStatus(1)}>switch</button>
    </div>
  )
}
