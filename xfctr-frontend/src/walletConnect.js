import { Core } from '@walletconnect/core';
import { Web3Wallet } from '@walletconnect/web3wallet';

const core = new Core({
  projectId: '3e39ef81d0c1fcc9614e45835803ca72' // Sostituisci con il tuo projectId
});

const metadata = {
  name: 'xFCTR',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // Sostituisci con il tuo dominio
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

export const web3wallet = await Web3Wallet.init({
  core, // Passa l'istanza di 'core' condivisa
  metadata
});