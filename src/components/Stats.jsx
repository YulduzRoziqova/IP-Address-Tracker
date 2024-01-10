import React from "react";
import './stats.css'
const Stats = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className=" container">
      <div className=" parts ">
        <h1 >IP Address</h1>
        <p >{ipAddress}</p>
      </div>
      <div  className=" parts ">
        <h1>Location</h1>
        <p >{location}</p>
      </div>
      <div  className=" parts ">
        <h1>Timezone</h1>
        <p >{timezone}</p>
      </div>
      <div  className=" part ">
        <h1>ISP</h1>
        <p >{isp}</p>
      </div>
    </div>
  );
};

export default Stats;
