import { Wrapper } from '@googlemaps/react-wrapper';
import Box from '@mui/material/Box';
import React from 'react';

import Map from './Map';
import Marker from './Marker';
import WrapperStatus from './WrapperStatus';

// Toronto for now
const defaultCenter: google.maps.LatLngLiteral = {
  lat: 43.7417,
  lng: -79.3733,
};

const MapWrapper = (): JSX.Element => {
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
        <Map center={defaultCenter}>
          <Marker position={defaultCenter} />
        </Map>
      </Box>
    </Wrapper>
  );
};

export default MapWrapper;
