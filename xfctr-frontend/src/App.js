import React, { useState, useEffect } from 'react';
import LockTokens from './components/LockTokens';
import Vote from './components/Vote';
import { Button, Typography, Container } from '@mui/material';
import { useConnectWallet } from '@web3-onboard/react';
import onboard from './onboard';
import './App.css';

function App() {
  const [{ wallet, connecting, error }, connect, disconnect] = useConnectWallet();

  const handleConnectWallet = async () => {
    try {
      await connect();
    } catch (err) {
      console.error('Connection Error:', err);
    }
  };

  return (
    <Container>
      <header className="App-header">
        <Typography variant="h2" gutterBottom>
          xFCTR DApp
        </Typography>
        {wallet ? (
          <Button variant="contained" color="secondary" onClick={() => disconnect(wallet)}>
            Disconnect Wallet
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleConnectWallet}>
            Connect Wallet
          </Button>
        )}
        {connecting && <Typography variant="body1">Connecting...</Typography>}
        {error && <Typography variant="body1" style={{ color: 'red' }}>{JSON.stringify(error, Object.getOwnPropertyNames(error))}</Typography>}
      </header>
      <LockTokens provider={wallet ? wallet.provider : null} />
      <Vote provider={wallet ? wallet.provider : null} />
    </Container>
  );
}

export default App;