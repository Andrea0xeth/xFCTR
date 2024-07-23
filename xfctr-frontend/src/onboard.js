import Onboard from '@web3-onboard/core';
import walletConnectModule from '@web3-onboard/walletconnect';
import injectedWalletsModule from '@web3-onboard/injected-wallets';

const walletConnect = walletConnectModule({
  projectId: '3e39ef81d0c1fcc9614e45835803ca72' // Sostituisci con il tuo projectId
});

const injectedWallets = injectedWalletsModule();

const onboard = Onboard({
  wallets: [
    injectedWallets,
    walletConnect
  ],
  chains: [
    {
      id: '0xa4b1', // Arbitrum One
      token: 'ETH',
      label: 'Arbitrum One',
      rpcUrl: 'https://arb1.arbitrum.io/rpc' // RPC URL per Arbitrum One
    }
  ],
  appMetadata: {
    name: 'xFCTR',
    icon: 'https://app.factor.fi/assets/logo-with-label-dark-f53f9ed3.svg',
    description: 'xFCTR DApp',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ]
  }
});

export default onboard;

