import React from 'react';

function Routes (props) {

    function getBus(line) {
        let stops = [];
        line.stops.forEach(stop => stops.push(
            <span key={stop}>{stop}</span>
        ))
        return (
            <div key={line.name}>
                <b>Bus:</b> {line.name}
                <b>Stops:</b> {stops}
            </div>
        )
    }

    function getBusses() {
        let busses = [];
        props.routeLines.forEach(line => {
            busses.push(getBus(line));
        });
        return busses;
    }

    if (props.route.length > 0) return <div> {getBusses()} </div>
    else return <div />

}

export default Routes;