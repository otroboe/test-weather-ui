import React, { useEffect, useState } from 'react';

import { City } from '@/utils/city';

interface MarkerOptions extends google.maps.MarkerOptions {
  city: City;
}

/**
 * Copy from here:
 * https://developers.google.com/maps/documentation/javascript/react-map#marker-component
 */
const Marker = ({ city, ...options }: MarkerOptions) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // Remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    const onClick = () => {
      console.log('Fetch weather for that!', city);
    };

    if (marker) {
      marker.setOptions({
        ...options,
        position: {
          lat: city.lat,
          lng: city.lng,
        },
      });
      marker.addListener('click', onClick);
    }
  }, [marker, city, options]);

  return null;
};

export default Marker;
