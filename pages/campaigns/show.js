import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import ContributeForm from '../../components/ContributeForm';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {
      address: props.query.address,
      minimumContribution: summary['0'],
      balance: summary['1'],
      requestsCount: summary['2'],
      approversCount: summary['3'],
      manager: summary['4'],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;
    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'A manager created this campaign and can create spend requests.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contirbute at least this much wei to become an approver.',
      },
      {
        header: requestsCount,
        meta: 'Number of Reuqests',
        description:
          'A request tries to withdraw money from the contract. Requests may be approved by approvers.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of people who have already donated to this campaign.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description:
          'The balance is how much money this campaign has left to spend.',
        style: { overflowWrap: 'break-word' },
      },
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
