import '../App.css';
import '../Fonts.css';
import { Box } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react'
import NameIntro from '../components/NameIntro';
import ExperienceItem from '../components/ExperienceItem';
import ProjectPage from '../components/ProjectPage';
import colorPalette from '../data/ColorPalette';
import exp from '../data/Experiences';

function SideNavigatorItem({ selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className="fadeColor cursorPointer"
      style={{
        marginTop: 10,
        height: (selected ? 100 : 40),
        backgroundColor: (selected ? colorPalette.color2 : colorPalette.color1),
        borderRadius: 50,
      }}
    />
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function HomePage() {
  const refs = useRef(new Array(exp.length + 2));
  const [offsetY, setOffsetY] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // Make page scroll back to top on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

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

  const currentIndex = () => Math.round(offsetY / windowDimensions.height);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box className="scroll-container">
        <div className="scroll-area" ref={(element) => { refs.current[0] = element }}>
          <NameIntro />
        </div>

        {exp.map((item, id) => {
          return (
            <div
              className="scroll-area"
              style={{ width: '70%', margin: '0 auto', position: 'relative' }}
              ref={(element) => { refs.current[id + 1] = element }}
              key={id}
            >
              <ExperienceItem
                title={item.title}
                role={item.role}
                description={item.description}
                id={id}
                isLast={id === exp.length - 1}
              />
            </div>
          )
        })}

        <div className="scroll-area" ref={(element) => { refs.current[exp.length + 1] = element }}>
          <ProjectPage />
        </div>
      </Box>

      <Box sx={{
        width: 20,
        transform: 'translateY(-50%)',
        position: 'fixed',
        top: '50%',
        left: '20px'
      }}>
        <Box
          className="fadeColor cursorPointer"
          onClick={() => refs.current[0].scrollIntoView({ behavior: 'smooth' })}
          sx={{
            height: 20,
            backgroundColor: (currentIndex() === 0 ? colorPalette.color2 : colorPalette.color1),
            borderRadius: 5,
          }}
        />

        {exp.map((item, id) => {
          return (
            <SideNavigatorItem
              key={id}
              selected={currentIndex() - 1 === id}
              onClick={() => refs.current[id + 1].scrollIntoView({ behavior: 'smooth' })}
            />
          )
        })}

        <SideNavigatorItem
          selected={currentIndex() === exp.length + 1}
          onClick={() => refs.current[exp.length + 1].scrollIntoView({ behavior: 'smooth' })}
        />
      </Box>
    </Box>
  )
}

export default HomePage;