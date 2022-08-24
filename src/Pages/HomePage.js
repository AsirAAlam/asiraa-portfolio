import '../App.css';
import '../Fonts.css';
import { Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const iconStyle = { height: 100, width: 100, cursor: 'pointer' };
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
      </Container>

      <div title="Go to GitHub">
        <a
          className="linkIcon"
          target="_blank"
          rel="noreferrer"
          href={github}>
          <GitHubIcon sx={iconStyle} />
        </a>
      </div>

      <div title="Go to LinkedIn">
        <a
          className="linkIcon"
          target="_blank"
          rel="noreferrer"
          href={linkedin}>
          <LinkedInIcon sx={iconStyle} />
        </a>
      </div>

      <div title="Download Resume">
        <a
          className="linkIcon"
          href={require("../resume.pdf")}
          download="resume.pdf">
          <InsertDriveFileIcon sx={iconStyle} />
        </a>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias quis repellat expedita veniam dolor fugit cupiditate, aut eius voluptates deleniti facere ducimus voluptatibus saepe earum nam porro exercitationem harum!
        Expedita ducimus quibusdam fugit eius beatae nesciunt in dicta, deleniti sint, tempora nulla placeat aut commodi voluptatum porro delectus, ut quae iusto quaerat quasi amet adipisci praesentium pariatur dignissimos? Sit.
      </p>
    </div>
  );
}