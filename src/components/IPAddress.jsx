import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Stats from "./Stats";
import './ipaddress.css'
// import Map from "./Map";

const IPAddress = () => {
  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  // const [coordinates, setCoordinates] = useState({
  //   lat: 27.5035,
  //   lng: 77.67215,
  // });

  const fetchLocation = (ipAddress = "") => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_BWCbTg6KGF7Ag8BbKOuRJuMN0bfK8&ipAddress=${ipAddress}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIPAddress(data.ip);
        setLocation(
          `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
        );
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(`${data.isp}`);
        // setCoordinates({ lat: data.location.lat, lng: data.location.lng });
      });
  };

  useEffect(() => {
    fetchLocation();
  }, []);
  return (
    <div >
      <SearchBar setIPAddress={setIPAddress} fetchLocation={fetchLocation} />
      <Stats
        ipAddress={IPAddress}
        location={location}
        timezone={timezone}
        isp={ISP}
      />
      {/* <Map coordinates={coordinates} /> */}
    </div>
  );
};

export default IPAddress;
