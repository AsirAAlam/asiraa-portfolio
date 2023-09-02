import React, { useEffect, useState } from 'react'
import {
  Box,
} from '@mui/material';
import Handles from '../components/Handles';
import bio from '../data/Bio';
import colorPalette from '../data/ColorPalette';

export default function NameIntro() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      <Box sx={{
        width: 600, pl: '50%',
      }}>
        <Box sx={{
          fontFamily: 'Oxygen',
          fontSize: 40,
          fontWeight: 700,
          color: colorPalette.color4,
          opacity: 1 - 0.005 * offsetY,
        }}>
          {bio.name}
        </Box>

        <Box m={1} />

        <div style={{
          fontFamily: 'Belleza',
          color: colorPalette.color3,
          fontSize: 20,
          transform: `translateY(${offsetY * -1}px)`,
          opacity: 1 - 0.005 * offsetY,
          background: 'rgba(0, 0, 0, 0)'
        }}>
          {bio.description}
        </div>

        <Handles />

      </Box>
    </Box>
  );
}