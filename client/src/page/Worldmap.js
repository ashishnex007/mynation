// WorldMap.js
import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const WorldMap = ({ mapData }) => {
  return (
    <ComposableMap>
      <Geographies geography={mapData}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {/* Add markers or other map elements as needed */}
      {mapData.locations &&
        Object.values(mapData.locations).map((location) => (
          <Marker key={location.name} coordinates={[location.lng, location.lat]}>
            {/* Add your marker content here */}
            <circle r={8} fill="#FF0067" />
          </Marker>
        ))}
    </ComposableMap>
  );
};

export default WorldMap;