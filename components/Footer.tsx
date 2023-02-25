import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Web3Button } from '@thirdweb-dev/react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <Box>
      <Box
        sx={{
          height: '8.5vh',
          width: '100vw',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          <Typography sx={{ color: 'white'}}>
          Copyright © 2023, All rights reserved.
          </Typography>
        </Box>
      </Box>
  );
}
