import React from "react";
import "leaflet/dist/leaflet.css";

import markerIcon from "../images/icon-location.svg";
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer';
import { Marker, TileLayer } from  'https://cdn.esm.sh/react-leaflet';

const Map = ({ coordinates }) => {
  const marker = markerIcon ;
  let state = {
    keyMAP: Math.random(),
  };
  return (
    <MapContainer
      key={state.keyMAP}
      center={[coordinates.lat, coordinates.lng]}
      zoom={18}
      className="w-full h-3/5 z-0"
    >
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
        <Marker
          position={[coordinates.lat, coordinates.lng]}
          icon={marker}
        ></Marker>
    </MapContainer>
  );
};

export default Map;
