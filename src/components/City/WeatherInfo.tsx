import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

type WeatherInfoProps = {
  feelsLike: number;
  temperature: number;
  weatherCode: string;
  windDirection: string;
  windSpeed: number;
};

const WeatherInfo = ({
  feelsLike,
  temperature,
  weatherCode,
  windDirection,
  windSpeed,
}: WeatherInfoProps): JSX.Element => {
  return (
    <Stack sx={{ flex: 1 }}>
      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
          Temperature:
        </Typography>
        <Typography variant="body2">{temperature}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
          Feels Like:
        </Typography>
        <Typography variant="body2">{feelsLike}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
          Weather code:
        </Typography>
        <Typography variant="body2">{weatherCode}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
          Wind Direction:
        </Typography>
        <Typography variant="body2">{windDirection}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
          Wind Speed:
        </Typography>
        <Typography variant="body2">{windSpeed}</Typography>
      </Stack>
    </Stack>
  );
};

export default WeatherInfo;
