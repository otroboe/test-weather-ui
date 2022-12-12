import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

import { City } from '@/utils/city';

type WeatherModalProps = {
  city: City;
  onClose: () => void;
  open: boolean;
};

const WeatherModal = ({ city, onClose, open }: WeatherModalProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Current Weather of {city.name}</DialogTitle>
      <DialogContent dividers>Hello world</DialogContent>
    </Dialog>
  );
};

export default WeatherModal;
