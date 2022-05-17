import CampaignFactory from './build/CampaignFactory.json';
import web3 from './web3';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0180CB880451d085b46004740B03386c2d33Dfe2'
);

export default instance;
