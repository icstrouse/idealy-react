import Card from 'react-bootstrap/Card';

import Navbar from '../components/Navbar.jsx';

import ideas from '../ideas';

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
  return (
    <div>
      <Navbar />

      <h1 className="m-4">Review Ideas</h1>

      {ideas.map(idea => <IdeaCard idea={idea} />)}
    </div>
  );
}

export default Review;