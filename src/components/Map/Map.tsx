import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

interface MapProps {
  center: google.maps.LatLngLiteral;
  children?: React.ReactNode;
  zoom?: number;
}

const Map = ({ center, children, zoom = 4 }: MapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new google.maps.Map(ref.current, {
          center,
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
        }),
      );
    }
  }, [ref, map, center, zoom]);

  return (
    <>
      <div ref={ref} style={{ height: '100%' }} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
