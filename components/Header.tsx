import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';
import { ConnectWallet } from '@thirdweb-dev/react';

export default function ButtonAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" sx={{ width: '100vw' }}>
        <Toolbar className="flex flex-col md:flex-row">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu} // add onClick handler
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NFT
          </Typography>
          <ConnectWallet />
        </Toolbar>
      </AppBar>
      {menuOpen && (
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            float: 'left',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
          <Link href="/">
            <Button
              variant="contained"
              sx={{ mb: 1, color: 'white', bgcolor: 'black', '&:hover': { bgcolor: 'grey' } }}
            >
              <a style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            </Button>
          </Link>
          <Link href="/all">
            <Button
              variant="contained"
              sx={{ mb: 1, color: 'white', bgcolor: 'black', '&:hover': { bgcolor: 'grey' } }}
            >
              <a style={{ color: 'white', textDecoration: 'none' }}>All</a>
            </Button>
          </Link>
          <Link href="/owned">
            <Button
              variant="contained"
              sx={{ mb: 1, color: 'white', bgcolor: 'black', '&:hover': { bgcolor: 'grey' } }}
            >
              <a style={{ color: 'white', textDecoration: 'none' }}>Owned</a>
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
