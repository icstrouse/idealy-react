import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

import Navbar from '../components/Navbar.jsx';

import ideasJs from '../ideas';

function getIdea(ideaId) {
  return new Promise((resolve, reject) => {
    console.log({ ideaId })
    const [currentIdea] = ideasJs.filter(idea => idea.id === ideaId);
    resolve(currentIdea);
  });
}

// To do:
// Add tag
// Categorize by medium / type of project (ie. business, movie, etc.)
// Combine with other ideas
// Expand idea

function Develop() {
  const [idea, setIdea] = useState({});

  let { ideaId } = useParams();
  ideaId = parseInt(ideaId, 10);

  useEffect(() => {
    getIdea(ideaId)
      .then(setIdea);
  }, [])
  
  if (idea.id) {
    const createdDate = new Date(idea.created_date);

    return (
      <>
        <Navbar activeKey="/develop" />
  
        <Container>
  
          <h1 className="m-4">Develop an Idea</h1>
  
          <Card className="m-4">
            <Card.Header>
              <Card.Title className="pt-2">{idea.title}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>Description: {idea.description}</Card.Text>
              <Card.Text>Type: {idea.type}</Card.Text>
              <Card.Text>Date: {createdDate.toDateString()}</Card.Text>
              <Card.Text>Tags:</Card.Text>
              <ListGroup>
                {idea.tags.map(tag =>
                  <ListGroup.Item key={tag}>
                    <Card.Text>{tag}</Card.Text>
                  </ListGroup.Item>
                )}
              </ListGroup>
              
            </Card.Body>
            <Card.Footer>
              <Form.Check className="form-check-inline">
                <Form.Check.Input className="form-check-input" type="checkbox"></Form.Check.Input>
                <Form.Check.Label className="form-check-label text-info">
                  Archive
                </Form.Check.Label>
              </Form.Check>
            </Card.Footer>
          </Card>
        </Container>
      </>
    );
  }

  return <p>loading...</p>
}

export default Develop;