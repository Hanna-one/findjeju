import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default  function Mapimage ({x,y,title}){
  return (
    <Map 
    center={{ lat: y, lng: x}} 
    style={{ width: '930px', height: '300px', marginTop: "30px", border: "1px solid rgb(106, 149, 40)"}}
    level={3} 
    >
    <MapMarker position={{ lat: y, lng: x }}>{title}</MapMarker>
  </Map>
  );
}