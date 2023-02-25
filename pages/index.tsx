import { ConnectWallet } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import BoxSx from '../components/BoxSx';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Box } from '@mui/system';

const Home: NextPage = () => {
  return (
    <div>
      <BoxSx />
    </div>
  );
};

export default Home;
