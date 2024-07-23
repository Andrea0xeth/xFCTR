import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3OnboardProvider } from '@web3-onboard/react';
import onboard from './onboard';
import './index.css';

ReactDOM.render(
  <Web3OnboardProvider web3Onboard={onboard}>
    <App />
  </Web3OnboardProvider>,
  document.getElementById('root')
);