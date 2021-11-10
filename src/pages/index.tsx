import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Link from './Link';
import Copyright from './Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla
          odit, dicta commodi delectus eveniet in corporis saepe dignissimos
          voluptatum ab amet numquam aliquid. Doloribus nobis officiis
          repudiandae, ipsum aliquid mollitia amet facere, cumque natus a non
          cum laudantium veritatis animi provident inventore incidunt dicta!
        </p>
        <ProTip />

        <Copyright />
      </Box>
    </Container>
  );
}
