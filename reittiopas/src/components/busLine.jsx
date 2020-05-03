import React from 'react';
import { Grid } from 'semantic-ui-react'

export const BusLine = ({ line }) => {

  const getStops = (stops => {
    let stopList = [];
    for (let i = 0; i < stops.length; i++) {
      if (i === 0) {
        // first bus
        stopList.push(<b key={i}>{stops[i]}</b>);
      } else if (i === stops.length -1) {
        // last bus
        stopList.push(<b key={i}>{stops[i]}</b>)
      } else {
        stopList.push(<div key={i}>{stops[i]}</div>)
      }
    }
    return stopList;
  });

  return (
    <div className={`container busline ${line.name}`}>
      <Grid>
        <Grid.Row centered>
          <span>Take bus {line.name} for {line.stops.length} stops</span>
        </Grid.Row>
        <Grid.Row centered>
          {getStops(line.stops)}
        </Grid.Row>
      </Grid>
    </div>
  );
};