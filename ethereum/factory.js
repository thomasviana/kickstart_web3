import CampaignFactory from './build/CampaignFactory.json';
import web3 from './web3';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xA4862b796876d7b3Ae0ea89A2f8FBcf6d41a2239'
);

export default instance;
