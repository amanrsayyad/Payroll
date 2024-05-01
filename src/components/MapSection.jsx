import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { MapUi } from "../utils/DashboardStyles";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1hbnIwMDEiLCJhIjoiY2x2Z3ZsbzlvMHoyZzJrbnpxc2dta3ZxbCJ9._kBWW2EW_K0qKSlJ3b1Jdw";

const MapSection = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [74.004173, 17.688321],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker({ color: "#228b22" })
      .setLngLat(coordinates)
      .addTo(map);
  };

  return (
    <>
      <MapUi id="map"></MapUi>
    </>
  );
};

export default MapSection;
