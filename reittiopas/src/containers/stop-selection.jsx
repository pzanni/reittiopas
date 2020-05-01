import React, { useState } from 'react';
import { SelectStop } from './select';
import { Grid, Button } from 'semantic-ui-react';
import { getAllStops } from '../backend/mock-backend/stopsService';

export const StopSelection = ({ onSearch }) => {
  const [startStop, setStartStop] = useState('');
  const [endStop, setEndStop] = useState('');  

  return (
    <div className="stop-selection">
      <Grid columns={2} padded>
        <Grid.Column>
          <SelectStop
            options={getAllStops()}
            onChange={setStartStop}
            label={'Mistä'}
            selected={startStop}
          />
        </Grid.Column>
        <Grid.Column>
          <SelectStop
            options={getAllStops()}
            onChange={setEndStop}
            label={'Mihin'}
            selected={endStop}
          />
        </Grid.Column>
      </Grid>
      <Grid columns={1} centered>
      <Button
        disabled={startStop === '' || endStop === ''}
        onClick={() => onSearch(startStop, endStop)}>Hae reitti
        </Button>
      </Grid>
    </div>
  )
}