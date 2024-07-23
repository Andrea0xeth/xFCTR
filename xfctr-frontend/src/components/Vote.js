import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { ethers } from 'ethers';
import lockAndVoteAbi from '../abis/LockAndVote.json';

const Vote = ({ provider }) => {
  const [proposalId, setProposalId] = useState('');
  const [txStatus, setTxStatus] = useState(null);

  const vote = async () => {
    if (!provider) {
      setTxStatus('Please connect your wallet first.');
      return;
    }

    try {
      const signer = new ethers.providers.Web3Provider(provider).getSigner();
      const contractAddress = '0x7c355634Dc4E932154DcbfF0890CDFfb5b5c010B';
      const contract = new ethers.Contract(contractAddress, lockAndVoteAbi.abi, signer);
      const tx = await contract.vote(proposalId);
      await tx.wait();
      setTxStatus('Vote cast successfully!');
    } catch (error) {
      setTxStatus(`Transaction failed: ${error.message}`);
    }
  };

  return (
    <Paper style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Vote
      </Typography>
      <TextField
        label="Proposal ID"
        value={proposalId}
        onChange={(e) => setProposalId(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={vote}>
        Vote
      </Button>
      {txStatus && <Typography variant="body1" style={{ marginTop: '10px' }}>{txStatus}</Typography>}
    </Paper>
  );
};

export default Vote;