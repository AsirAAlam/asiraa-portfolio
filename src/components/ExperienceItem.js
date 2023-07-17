import React, { useEffect, useState } from 'react'
import {
  Box, Grid
} from '@mui/material';
import colorPalette from '../data/ColorPalette';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function ExperienceItem({ title, role, description, id, isLast }) {
  const [offsetY, setOffsetY] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRelativeOffset = () => windowDimensions.height * (id + 1) - offsetY;
  const getOpacity = () => 1 - 0.002 * Math.abs(getRelativeOffset());

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          {/* <img src={require('../lincoln1.png')} alt="abraham lincoln" style={{ width: 'min(100%, 400px)' }} /> */}

        </Grid>
        <Grid item xs={6}>
          <Box m={5} />
          <Box sx={{ height: 500 }}>
            <Box sx={{
              fontFamily: 'Oxygen',
              fontSize: 20,
              fontWeight: 700,
              color: colorPalette.color4,
              opacity: getOpacity(),
            }}>
              {title}
            </Box>
            <Box sx={{
              fontFamily: 'Oxygen',
              fontSize: 20,
              fontWeight: 400,
              color: colorPalette.color2,
              opacity: getOpacity(),
            }}>
              {role}
            </Box>

            <Box m={1} />

            <div style={{
              fontFamily: 'Belleza',
              color: colorPalette.color3,
              fontSize: 20,
              opacity: getOpacity(),
              background: 'rgba(0, 0, 0, 0)'
            }}>
              {description}
            </div>
          </Box>

        </Grid>

      </Grid>

    </Box>
  )
}

export default ExperienceItem