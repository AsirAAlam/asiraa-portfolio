import '../App.css';
import '../Fonts.css';
import { Container, Box } from '@mui/material';
// import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const iconStyle = { 
  height: 100, 
  width: 100, 
  cursor: 'pointer' 
};
const github = 'https://github.com/AsirAAlam';
const linkedin = 'https://www.linkedin.com/in/asiraalam/';

export default function HomePage() {
  return (
    <div className="App">
      <Container sx={{textAlign: 'center'}}>
        <h2 className="quicksand" style={{ fontWeight: 500, fontSize: 120 }}>
          Asir A. Alam
        </h2>
        <h2 className='quicksand' style={{ fontWeight: 300, fontSize: 80, marginTop: -130 }}>
          Personal Portfolio
        </h2>

        <Box 
          title="Go to GitHub"
          sx={{ display: 'inline-block '}}>
          <a
            className="linkIcon"
            target="_blank"
            rel="noreferrer"
            href={github}>
            <GitHubIcon sx={iconStyle} />
          </a>
        </Box>
        
        <Box 
          title="Go to LinkedIn"
          sx={{ display: 'inline-block '}}>
          <a
            className="linkIcon"
            target="_blank"
            rel="noreferrer"
            href={linkedin}>
            <LinkedInIcon sx={iconStyle} />
          </a>
        </Box>

        <Box 
          title="Download Resume"
          sx={{ display: 'inline-block '}}>
          <a
            className="linkIcon"
            href={require("../resume.pdf")}
            download="resume.pdf">
            <SimCardDownloadIcon sx={iconStyle} />
          </a>
        </Box>
      </Container>



      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias quis repellat expedita veniam dolor fugit cupiditate, aut eius voluptates deleniti facere ducimus voluptatibus saepe earum nam porro exercitationem harum!
        Expedita ducimus quibusdam fugit eius beatae nesciunt in dicta, deleniti sint, tempora nulla placeat aut commodi voluptatum porro delectus, ut quae iusto quaerat quasi amet adipisci praesentium pariatur dignissimos? Sit.
      </p>
    </div>
  );
}