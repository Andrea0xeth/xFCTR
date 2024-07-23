import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const strategies = [
  { name: 'PT-weETH-26SEP2024/WETH', type: 'LONG', protocols: 'silo', tvl: '$1.20M', apy: '26.854%', deposited: '-' },
  { name: 'PT-USDe-29AUG2024/USDC.e', type: 'LONG', protocols: 'silo', tvl: '$1.05M', apy: '13.988%', deposited: '-' },
  // Aggiungi altre strategie qui
];

const StrategyTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Strategy Name</TableCell>
            <TableCell>Strategy Type</TableCell>
            <TableCell>Protocols</TableCell>
            <TableCell>TVL</TableCell>
            <TableCell>APY</TableCell>
            <TableCell>Deposited</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {strategies.map((strategy, index) => (
            <TableRow key={index}>
              <TableCell>{strategy.name}</TableCell>
              <TableCell>{strategy.type}</TableCell>
              <TableCell>{strategy.protocols}</TableCell>
              <TableCell>{strategy.tvl}</TableCell>
              <TableCell>{strategy.apy}</TableCell>
              <TableCell>{strategy.deposited}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StrategyTable;