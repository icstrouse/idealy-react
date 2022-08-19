import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

import Navbar from '../components/Navbar.jsx';

// To do:
// Add tag
// Categorize by medium / type of project (ie. business, movie, etc.)
// Combine with other ideas
// Expand idea

import ideas from '../ideas';

function Develop() {
  const idea = ideas[1];
  const createdDate = new Date(idea.created_date);

  return (
    <div>
      <Navbar />

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
            {idea.tags.map(tag => <ListGroup.Item><Card.Text>{tag}</Card.Text></ListGroup.Item>)}
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
    </div>
  );
}

export default Develop;