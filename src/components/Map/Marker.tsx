import React, { useEffect, useState } from 'react';

/**
 * Copy from here:
 * https://developers.google.com/maps/documentation/javascript/react-map#marker-component
 */
const Marker = (options: google.maps.MarkerOptions) => {
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

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

export default Marker;
