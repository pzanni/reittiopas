import React from 'react';
import { Grid } from 'semantic-ui-react'
import { BusLine } from '../components/busLine';

export const Routes = (props) => {

  const getBusses = () => {
    let busses = [];
    props.routeLines.forEach(line => {
      busses.push(
        <Grid.Row key={line.name} >
          <BusLine line={line} />
        </Grid.Row>
      );
    });
    return busses;
  }

  if (props.route.length > 0) return (
    <div className="routes"> 
      <Grid>
        {getBusses()} 
      </Grid>
    </div>
  );
  else return <div />

}
