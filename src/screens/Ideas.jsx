import { useState } from 'react'
import { useQuery } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import Navbar from '../components/Navbar.jsx';
import { GET_IDEAS } from '../graphql';
import { filterIdeas, sortIdeas } from '../utils'

mapboxgl.accessToken = 'pk.eyJ1IjoiaXN0cm91c2UiLCJhIjoiY2lzamx6eGRqMDJndjJ1cHV2NXR6MTNoYiJ9.9No__WAI25ogknOpN0JXoQ';

function IdeaCard({ idea }) {
  const createdDate = new Date(idea.created_date);

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title className="pt-2">
          <a href={`/idea/${idea._id}`}>
            {idea.text}
          </a>
        </Card.Title>
        {/* <Card.Text className="card-text">{idea.description}</Card.Text>
        <Card.Text className="card-text">{createdDate.toDateString()}</Card.Text> */}
      </Card.Body>
    </Card>
  )
}

function Review() {
  const [ideas, setIdeas] = useState([])

  const { loading, error } = useQuery(GET_IDEAS, {
    onCompleted: data => setIdeas(data.ideas),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Navbar activeKey="/ideas" />
      <Container>
        {ideas.map(idea =>
          <IdeaCard key={idea._id} idea={idea} />
        )}
      </Container>
    </>
  );
}

export default Review;


// To do:    
// List ideas by time
// Filter idea by location, type
// I’m feeling lucky
// Filter by tag