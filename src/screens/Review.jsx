import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Navbar from '../components/Navbar.jsx';

import ideasJs from '../ideas';

function getIdeas() {
  return new Promise((resolve, reject) => {
    resolve(ideasJs);
  });
}

function IdeaCard({ idea }) {
  const createdDate = new Date(idea.created_date);

  return (
    <Card className="m-4">
      <Card.Header>
        <Card.Title className="pt-2">{idea.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text className="card-text">{idea.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text className="card-text">{createdDate.toDateString()}</Card.Text>
      </Card.Footer>
    </Card>
  )
}

// To do:    
// List ideas by time
// Filter idea by location, type
// I’m feeling lucky
// Filter by tag

function Review() {
  const [ideas, setIdeas] = useState([]);
    
  useEffect(() => {
    getIdeas()
      .then(setIdeas);
  }, [])

  console.log(ideas)

  return (
    <>
      <Navbar activeKey="/review" />

      <Container>

        <h1 className="m-4">Review Ideas</h1>

        {ideas.map(idea =>
          <IdeaCard key={idea.id} idea={idea} />
        )}
      </Container>
    </>
  );
}

export default Review;