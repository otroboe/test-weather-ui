import { Status } from '@googlemaps/react-wrapper';
import React from 'react';

const WrapperStatus = (status: Status) => {
  return <h1>{status}</h1>;
};

export default WrapperStatus;
