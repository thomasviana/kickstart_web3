import CampaignFactory from './build/CampaignFactory.json';
import web3 from './web3';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x39aeDe7256C61274cB30bd1413C138212Dc12dfC'
);

export default instance;
