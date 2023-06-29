import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const calculateTimeLeft = () => {

  let year = new Date().getFullYear()
  const difference = +new Date(`09/20/${year}`) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
}

function CountDown() {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
  }, [timeLeft])

  return (
    <Box sx={{
      bgcolor: '#1c2a5e',
      color: 'white',
      p: 1
    }}>
      <Typography>Ends in :
        <AccessTimeIcon
          sx={{
            fontSize: '1rem',
            mb: '0.2rem'
          }} /> {':' + timeLeft.days + ' :' + timeLeft.hours + '  :' + timeLeft.minutes + '  :' + timeLeft.seconds}</Typography>
    </Box>
  )
}

export default CountDown