import React, { useState }  from 'react';
import Select from './select';
import { getAllStops } from '../backend/mock-backend/stopsService';
import { getFastestRoute, getLinesForRoute } from '../backend/mock-backend/routeService';
import Routes from'./routes';

function RouteSearch (props) {
  const [startStop, setStartStop] = useState('');
  const [endStop, setEndStop] = useState('');
  const [route, setRoute] = useState([])
  const [routeLines, setRouteLines] = useState([])

  const onRouteSearch = () => {
    console.log('searching route ' + startStop + ' -> ' + endStop)
    let fastestRoute = getFastestRoute(startStop, endStop);
    let fastestRouteLines = getLinesForRoute(fastestRoute);
    setRoute(fastestRoute);
    setRouteLines(fastestRouteLines);
  }

  return (
        <div>
          Hello {props.name}! Start by selecting stops :)

          <Select 
            options={getAllStops()}
            onChange={setStartStop}
            label={'Aloittava pysäkki'}
            selected={startStop}
          />

          <Select
            options={getAllStops()}
            onChange={setEndStop}
            label={'Lopettava pysäkki'}
            selected={endStop}
          />

          <button disabled={startStop === '' || endStop === ''} onClick={() => onRouteSearch()}>Hae reitti</button>

          <Routes route={route} routeLines={routeLines} />

        </div>
      ) 
}

export default RouteSearch;