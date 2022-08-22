import './App.css';
import './Fonts.css';
import { Box, Container, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = { height: 100, width: 100, cursor: 'pointer' };

function App() {
  return (
    <div className="App">
      <Container>
        <h2 className="quicksand" style={{ fontWeight: 500, fontSize: 120 }}>
          Asir A. Alam
        </h2>
        <h2 className='quicksand' style={{ fontWeight: 300, fontSize: 80, marginTop: -130 }}>
          Personal Portfolio
        </h2>
      </Container>

      <GitHubIcon sx={{...iconStyle}} onClick={() => { }} />
      <LinkedInIcon sx={{...iconStyle}} onClick={() => { }} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias quis repellat expedita veniam dolor fugit cupiditate, aut eius voluptates deleniti facere ducimus voluptatibus saepe earum nam porro exercitationem harum!
        Expedita ducimus quibusdam fugit eius beatae nesciunt in dicta, deleniti sint, tempora nulla placeat aut commodi voluptatum porro delectus, ut quae iusto quaerat quasi amet adipisci praesentium pariatur dignissimos? Sit.
      </p>
    </div>
  );
}

export default App;
