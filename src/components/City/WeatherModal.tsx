import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';

import { City } from '@/utils/city';

import WeatherInfo from './WeatherInfo';

type WeatherModalProps = {
  city: City;
  onClose: () => void;
  open: boolean;
};

const WeatherModal = ({ city, onClose, open }: WeatherModalProps) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/observation?lat=${city.lat}&long=${city.lng}`;
  const [isLoading, toggleLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Record<string, any>>({});

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    fetch(fetchUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw response;
      })
      .then((data) => {
        // console.log({ data });
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        toggleLoading(false);
      });
  }, [fetchUrl, open]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Current Weather of {city.name}</DialogTitle>
      <DialogContent
        dividers
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {error ? (
          <div>Error when fetching weather informations!</div>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          <WeatherInfo
            feelsLike={data.feelsLike}
            temperature={data.temperature}
            weatherCode={data?.weatherCode?.value ?? ''}
            windDirection={data?.wind?.direction ?? ''}
            windSpeed={data?.wind?.speed ?? 0}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WeatherModal;
