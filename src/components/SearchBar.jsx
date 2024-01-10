import React, { useState } from "react";
import './searchBar.css'
import iconImage from "../images/icon-arrow.svg";

const SearchBar = ({ setIPAddress, fetchLocation }) => {
  const [ipAddress, setIpAddress] = useState("");

  const handleClick = () => {
    setIPAddress(ipAddress);
    fetchLocation(ipAddress);
  };

  return (
    <div className="search-bar-container">
      <h2>IP Address Tracker</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <div
          className=" buttan"
          onClick={handleClick}
        >
          <img src={iconImage} alt="arrow-icon" className="px-3 py-2" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
