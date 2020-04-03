import React from "react";
import GoogleMapReact from "google-map-react";

export default () => {
  const defaultGoogle = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 12
  };
  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={defaultGoogle.center}
        defaultZoom={defaultGoogle.zoom}
      />
    </div>
  );
};
