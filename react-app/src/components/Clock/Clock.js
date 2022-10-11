

import { useEffect, useState } from 'react';
import './clock.css';

function Clock() {




  let [hours, setHours] = useState(null);
  let [minutes, setMinutes] = useState(null);
  let [seconds, setSeconds] = useState(null);

  let [secondHandRot, setSecondHandRot] = useState(null);
  let [minuteHandRot, setMinuteHandRot] = useState(null);
  let [hourHandRot, setHourHandRot] = useState(null);






  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      let getDate = () => date = new Date();
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());

      let getRotation = (num, type) => {
        if(type === 'sec') setSecondHandRot(!seconds ? 0 : seconds * 6 + 6);
        if(type === 'min') setMinuteHandRot(!minutes ? 0 : minutes * 6 + 6);
        if(type === 'h') setHourHandRot(!hours  ? 0 : hours * 30 + 30);
      };

      getRotation(seconds, 'sec');
      getRotation(minutes, 'min');
      getRotation(hours, 'h');


      getDate();
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);




  return (
    <div className="clock">
      <div className='hands' id='secondHand' style={{ '--rotation': `${secondHandRot}deg` }}></div>
      <div className='hands' id='minuteHand' style={{ '--rotation': `${minuteHandRot}deg` }}></div>
      <div className='hands' id='hourHand' style={{ '--rotation': `${hourHandRot}deg` }}></div>
      <div id='digitalClock'>
        <div id='digHour' className='digitalNum'>{hours}</div>
        <div id='digColon'>:</div>
        <div id='digMin' className='digitalNum'>{minutes}</div>
        <div id='digColon'>:</div>
        <div id='digMin' className='digitalNum'>{seconds}</div>
      </div>
    </div>
  );
}

export default Clock;
