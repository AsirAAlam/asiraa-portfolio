import { Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const colorPalette = require('../json/ColorPalette.json');
const iconStyle = { height: 40, width: 40, cursor: 'pointer' };
const githubURL = 'https://github.com/AsirAAlam';
const linkedinURL = 'https://www.linkedin.com/in/asiraalam/';

function Handles(props) {
  const cols = document.getElementsByClassName('col1');
  for (let i = 0; i < cols.length; i++) {
    cols[i].style.color = colorPalette.color04;
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <a
        className="linkIcon"
        href={githubURL}
        style={{ display: 'inline-block' }}>
        <GitHubIcon sx={iconStyle} />
      </a>

      <a
        className="linkIcon"
        href={linkedinURL}
        style={{ display: 'inline-block' }}>
        <LinkedInIcon sx={iconStyle} />
      </a>

      <a
        className="linkIcon"
        href={require("../resume.pdf")}
        style={{ display: 'inline-block' }}
        download="resume.pdf">
        <SimCardDownloadIcon sx={iconStyle} />
      </a>
    </div>
  )
}

export default Handles;