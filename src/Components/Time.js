import React, {useState} from 'react';
import { Link } from 'react-router-dom';
<Link to ="Time">Time</Link>
const ty = {
    width: "120px",
    height: "40px",
    backgroundColor: "green",
    color: "white",
    borderRadius: "10px",
    fontSize: "20px"
}

export default function Time() {
    // setInterval(handleTime , 1000)
    const [time , setTime] = useState("")
    var today = new Date ().toLocaleTimeString();
    // alert(today)
    function handleTime () {
        setTime(today)
    }
  return (
      

    
    <div className='time'>
        <hr></hr>
      <h1>{time}</h1>
      <button onClick={handleTime} style={ty}>Get Time</button>
    </div>
  )
}