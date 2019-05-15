import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Arc,
  DefaultArcConfig,
  Proposals,
  Proposal
} from '@dorgtech/daocomponents';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button
} from '@material-ui/core';
import { IProposalOutcome } from '@daostack/client';

function App() {
  return (
    <div className="App">
    <Arc config={DefaultArcConfig}>
    <Proposals allDAOs={true}>
      <Proposal.Data>
      <Proposal.Entity>
      {(data, entity) => {
        const { id, title, url, description } = data;

        return (
          <ExpansionPanel>
            <ExpansionPanelSummary>
              <Typography>{id}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>some info: {description}</Typography>
              <Typography>url: {url}</Typography>
              <Button onClick={async () => {
                const tx = entity.stake(IProposalOutcome.Pass, 5);
                await tx.toPromise();
              }}>
                Up Stake
              </Button>
              <Button onClick={async () => {
                
              }}>
                Down Stake
              </Button>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      }}
      </Proposal.Entity>
      </Proposal.Data>
    </Proposals>
    </Arc>
    </div>
  );
}

export default App;
