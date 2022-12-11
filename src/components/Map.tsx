import { Loader } from '@googlemaps/js-api-loader';
import Box from '@mui/material/Box';
import React, { useEffect, useRef } from 'react';

const defaultCenter: google.maps.LatLngLiteral = {
  lat: 43.7417,
  lng: -79.3733,
};

type MapProps = {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
};

const Map = ({ center = defaultCenter, zoom = 5 }: MapProps): JSX.Element => {
  const googlemap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
    });

    let map;

    loader.load().then(() => {
      // For TS check
      if (googlemap.current === null) {
        return;
      }

      map = new google.maps.Map(googlemap.current, {
        center,
        mapTypeControl: false,
        streetViewControl: false,
        zoom,
      });
    });
  });

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
      ref={googlemap}
    />
  );
};

export default Map;
