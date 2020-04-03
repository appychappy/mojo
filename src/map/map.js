import React from "react";
import GoogleMapReact from "google-map-react";

import "./map.scss";
import MapPin from "../map-pin/map-pin";

export default () => {
  const defaultGoogle = {
    center: { lat: 53.25597, lng: -2.1314 },
    zoom: 12,
    options: {
      styles: [
        {
          featureType: "administrative",
          elementType: "all",
          stylers: [
            {
              saturation: "-100"
            }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: 65
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: "50"
            },
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: "-100"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "all",
          stylers: [
            {
              lightness: "30"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "all",
          stylers: [
            {
              lightness: "40"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              saturation: -100
            },
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              hue: "#ffff00"
            },
            {
              lightness: -25
            },
            {
              saturation: -97
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [
            {
              lightness: -25
            },
            {
              saturation: -100
            }
          ]
        }
      ]
    }
  };
  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={defaultGoogle.center}
        defaultZoom={defaultGoogle.zoom}
        bootstrapURLKeys={{
          key: "AIzaSyDAYOqZ7AuRUjCCBN4DfdH_zwdJ-D6oNAc",
          language: "en"
        }}
        options={defaultGoogle.options}
      >
        <MapPin lat={53.25597} lng={-2.1314} text="Mojo" />
        <MapPin lat={53.31597} lng={-2.1614} text="Mojo" />
      </GoogleMapReact>
    </div>
  );
};
