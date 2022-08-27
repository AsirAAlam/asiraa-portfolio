import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const iconStyle = { height: 80, width: 80, cursor: 'pointer' };
const github = 'https://github.com/AsirAAlam';
const linkedin = 'https://www.linkedin.com/in/asiraalam/';

function Handles(props) {
  return (
    <Box sx={{ ...props.sx, display: 'inline-block', width: iconStyle.width }}>
      {[
        { title: 'Go to GitHub', href: github, component: GitHubIcon },
        { title: 'Go to LinkedIn', href: linkedin, component: LinkedInIcon }
      ].map(a => {
        return (
          <Box
            title={a.title}
            sx={{ display: 'inline-block ' }}>
            <a
              className="linkIcon"
              target="_blank"
              rel="noreferrer"
              href={a.href}>
              <a.component sx={iconStyle} />
            </a>
          </Box>
        );
      })}

      <Box
        title="Download Resume"
        sx={{ display: 'inline-block ' }}>
        <a
          className="linkIcon"
          href={require("../resume.pdf")}
          download="resume.pdf">
          <SimCardDownloadIcon sx={iconStyle} />
        </a>
      </Box>
    </Box>);
}

export default Handles;