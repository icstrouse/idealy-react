import { useRef, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import Navbar from '../components/Navbar.jsx';
import { GET_IDEAS } from '../graphql';
import { filterIdeas } from '../utils'

mapboxgl.accessToken = 'pk.eyJ1IjoiaXN0cm91c2UiLCJhIjoiY2lzamx6eGRqMDJndjJ1cHV2NXR6MTNoYiJ9.9No__WAI25ogknOpN0JXoQ';

function MapBox() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-104.9876937866211);
  const [lat, setLat] = useState(40.01431655883789);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

function Map() {
  const [ideas, setIdeas] = useState([])

  const { loading, error } = useQuery(GET_IDEAS, {
    onCompleted: data => setIdeas(data.ideas)
  });

  const filterIdeas = () => {

  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Navbar activeKey="/map" />
      <Container>
        <h1 className="m-4">Map Ideas</h1>
        
        <MapBox />
      </Container>
    </>
  );
}

export default Map;


// To do:    
// List ideas by time
// Filter idea by location, type
// I’m feeling lucky
// Filter by tag