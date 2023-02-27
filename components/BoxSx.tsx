import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Web3Button } from '@thirdweb-dev/react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function BoxSx() {
  return (
    <Box >
      <Box
        sx={{
          height: '70vh',
          width: '100vw',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            height: '60vh',
            width: '60vw',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" sx={{ color: 'black' }}>
            Welcome to the NFT universe
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '5px 0',
        }}
      >
        <a href="/all" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{ mb: 1, mt: 1, color: 'white', bgcolor: 'black', '&:hover': { bgcolor: 'grey' } }}
          >
            Get Started
          </Button>
        </a>
      </Box>
    </Box>
  );
}
