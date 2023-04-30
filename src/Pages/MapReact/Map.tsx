// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  Circle
} from "react-google-maps";
import config from '../../Config';

//import mapStyles from "./mapStyles";

function Map() {
  const [selectedHos, setSelectedHos] = useState(null);
  const [lat, setLat] = useState(28.620749);//-75.6903
  const [lng, setLng] = useState(77.203354);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          
          const { latitude, longitude } = position.coords;
          setLat(latitude);setLng(longitude)
           searchNearbyHospitals(latitude, longitude);
          //setCoordinates({ latitude, longitude });
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

   const searchNearbyHospitals = (lat, lng) => {
    const request = {
      location: { lat, lng },
      radius: "5000",
      type: ["hospital"]
    };

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setHospitals(results);
      }
    });
  };

 

  return (
    <GoogleMap
      
      zoom={15}
      center={{ lat , lng  }}
      
    >
      <Marker
        defaultIcon={{
          url :'https://cdn-icons-png.flaticon.com/512/69/69947.png',
          scaledSize:new window.google.maps.Size(40,40),
        }}
        position={{
          lat: lat,
          lng: lng
        }}
      />
      {hospitals.map((hospital, index) => (
        <Marker
          shape={Circle}
          key={index}
          position={{
            lat: hospital.geometry.location.lat(),
            lng: hospital.geometry.location.lng()
          }}
          onClick={() => {
            setSelectedHos(hospital);
          }}
        />
      ))}

      {selectedHos && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedHos(null);
          }}
          position={{
            lat: selectedHos.geometry.location.lat(),
            lng: selectedHos.geometry.location.lng()
          }}
        >
          <div>
            <h2>{selectedHos.name}</h2>
            <p>{selectedHos.vicinity}</p>
          </div>
        </InfoWindow>
      )}

      
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
//let autocomplete=new google.maps.places.Auto
export default function MapR() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      
      <MapWrapped
        googleMapURL={`${config.mapAPIKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
