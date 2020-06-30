import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer} from "react-leaflet";
import TopoJSON from './TopoJSON';
import './style.css';
import topoJsonData from './us-states.json'



function App(){
    return (
      <Map center={[37.2756537,-104.6561154]} zoom={4}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
         <TopoJSON
          data={topoJsonData}
        />
      </Map>
    );
}

render(<App />, document.getElementById('root'));
