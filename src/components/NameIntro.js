import React, { useEffect, useState } from 'react'
import {
  Box,
} from '@mui/material';
import Handles from './Handles';

export default function NameIntro() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ width: 600, ml: '50%' }}>
      <Box sx={{
        fontFamily: 'Oxygen',
        fontSize: 40,
        fontWeight: 700,
        color: '#326273',
        opacity: 1 - 0.005 * offsetY,
      }}>
        Asir Alam
      </Box>

      <Box m={1} />

      <div style={{
        fontFamily: 'Belleza',
        color: '#307087',
        fontSize: 20,
        transform: `translateY(${offsetY * -1}px)`,
        opacity: 1 - 0.005 * offsetY,
        background: 'rgba(0, 0, 0, 0)'
      }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolorem iste quas ullam,
        praesentium itaque eius quidem hic aliquam placeat enim temporibus eveniet distinctio
        nesciunt, corrupti qui facilis doloremque cum.
      </div>

      <Handles />

    </Box>
  );
}