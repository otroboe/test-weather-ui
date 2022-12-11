import { Wrapper } from '@googlemaps/react-wrapper';
import Box from '@mui/material/Box';
import React from 'react';

import { fetchCityList } from '@/utils/city';

import Map from './Map';
import Marker from './Marker';
import WrapperStatus from './WrapperStatus';

type MapWrapperProps = {
  maxCities?: number;
};

const MapWrapper = ({ maxCities = 10 }: MapWrapperProps): JSX.Element => {
  const cities = fetchCityList(maxCities);

  // Take the top populated city as the center of the map.
  const center: google.maps.LatLngLiteral = {
    lat: cities[0].lat,
    lng: cities[0].lng,
  };

  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
      render={WrapperStatus}
    >
      <Box
        sx={{
          height: 400,
          width: '100%',
        }}
      >
        <Map center={center}>
          {cities.map((city, i) => (
            <Marker key={i} city={city} />
          ))}
        </Map>
      </Box>
    </Wrapper>
  );
};

export default MapWrapper;
