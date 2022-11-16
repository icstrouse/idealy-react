// PACKAGE IMPORTS
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// PROJECT IMPORTS
import Thot from '../components/Thot';
import NewThot from '../components/NewThot';
import {
  GET_IDEA,
  UPDATE_IDEA_TEXT,
  ADD_IDEA,
} from '../graphql';

function Idea() {
  const { ideaId } = useParams();
  const [ideaText, setIdeaText] = useState('')
  const [thots, setThots] = useState([])
  const [showNew, setShowNew] = useState(false);

  const [updateIdeaText] = useMutation(UPDATE_IDEA_TEXT);

  if (ideaId) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error } = useQuery(GET_IDEA, {
      variables: { id: ideaId },
      onCompleted: ({ idea }) => {
        setIdeaText(idea.text);
        idea.thots && setThots(idea.thots);
      }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
  }

  const submitIdeaText = () => {
    if (ideaId) {
      updateIdeaText({ variables: { id: ideaId, text: ideaText }});
    } else {
      // add new idea 
    }
  }

  return (
    <Container>
      <Row>
        <Form>
          <h3>
            <Form.Control
              plaintext
              type="text"
              placeholder="What's your idea?"
              value={ideaText}
              onChange={e => setIdeaText(e.target.value)}
              onBlur={e => submitIdeaText()}
            />
          </h3>
        </Form>
      </Row>

      {thots.map(thot =>
        <Thot key={thot._id} thot={thot} />
      )}

      <Row>
        <Col className="col-1">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? <span>&#45;</span> : <span>&#43;</span>}
          </Button>
        </Col>

        <Col>
          {showNew ? 
            <Form>
              <NewThot ideaId={ideaId} />
            </Form>
          : null}
        </Col>
      </Row>
    </Container>
  )
}

export default Idea