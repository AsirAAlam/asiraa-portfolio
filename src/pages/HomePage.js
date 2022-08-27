import '../App.css';
import '../Fonts.css';
import { Container, Box, Grid } from '@mui/material';
// import { motion } from "framer-motion";
import Handles from '../components/Handles';

export default function HomePage() {
  return (
    <div className="App">
      <Handles sx={{ position: 'fixed', top: '50%', transform: 'translateY(-50%)'}}/>

      <Container sx={{ textAlign: 'center' }}>
        <h2 className="quicksand" style={{ fontWeight: 500, fontSize: 120 }}>
          Asir A. Alam
        </h2>
        <h2 className='quicksand' style={{ fontWeight: 300, fontSize: 80, marginTop: -130 }}>
          Personal Portfolio
        </h2>
      </Container>


      <Grid container horizontal>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={11}>
          <Box sx={{height: '100%', width: '100%', bgcolor: 'green'}}>
          </Box>
        </Grid>
      </Grid>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias quis repellat expedita veniam dolor fugit cupiditate, aut eius voluptates deleniti facere ducimus voluptatibus saepe earum nam porro exercitationem harum!
        Expedita ducimus quibusdam fugit eius beatae nesciunt in dicta, deleniti sint, tempora nulla placeat aut commodi voluptatum porro delectus, ut quae iusto quaerat quasi amet adipisci praesentium pariatur dignissimos? Sit.
      </p>
    </div>
  );
}