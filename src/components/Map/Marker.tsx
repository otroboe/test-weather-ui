import React, { useEffect, useState } from 'react';

import { WeatherModal } from '@/components/City';
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
  const [openedModal, toggleModal] = useState(false);

  const handleCloseModal = () => {
    toggleModal(false);
  };

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
    const handleClick = () => {
      toggleModal(true);
    };

    if (marker) {
      marker.setOptions({
        ...options,
        title: city.name,
        position: {
          lat: city.lat,
          lng: city.lng,
        },
      });
      marker.addListener('click', handleClick);
    }
  }, [marker, city, options]);

  return (
    <WeatherModal city={city} open={openedModal} onClose={handleCloseModal} />
  );
};

export default Marker;
