import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Navbar from '../components/Navbar.jsx';

const GET_IDEAS = gql`
  query Ideas {
    ideas {
      _id
      title
      description
      created_date
      created_place
      type
      tags
      parent
      is_public
      archived
    }
  }
`;

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

function Review() {
  const { loading, error, data } = useQuery(GET_IDEAS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Navbar activeKey="/review" />
      <Container>
        <h1 className="m-4">Review Ideas</h1>
        {data.ideas.map(idea =>
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