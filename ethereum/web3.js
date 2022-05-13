import Web3 from 'web3';

let web3;

// Adding a conditional to our web3.js file to check if we are running in the browser or on the server.

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/94dd1f4b955a494b996257784ac11121'
  );
  web3 = new Web3(provider);
}

export default web3;
