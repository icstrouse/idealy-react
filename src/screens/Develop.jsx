import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

import Navbar from '../components/Navbar.jsx';

const GET_IDEA = gql`
  query Idea($id: ID) {
    idea(_id: $id) {
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

const UPDATE_TITLE = gql`
  mutation UpdateTitle($title: String, $id: ID) {
    updateIdea(title: $title, _id: $id) {
      _id
      title
    }
  }
`;

const UPDATE_DESCRIPTION = gql`
  mutation UpdateDescription($id: ID, $description: String) {
    updateIdea(_id: $id, description: $description) {
      _id
      description
    }
  }
`;

const UPDATE_TYPE = gql`
  mutation UpdateType($id: ID, $type: String) {
    updateIdea(_id: $id, type: $type) {
      _id
      type
    }
  }
`;

const UPDATE_IS_PUBLIC = gql`
  mutation UpdateIsPublic($id: ID, $isPublic: Boolean) {
    updateIdea(_id: $id, is_public: $isPublic) {
      _id
      is_public
    }
  }
`;

const UPDATE_ARCHIVED = gql`
  mutation UpdateArchived($id: ID, $archived: Boolean) {
    updateIdea(_id: $id, archived: $archived) {
      _id
      archived
    }
  }
`;

function Develop() {
  const { ideaId } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [tags, setTags] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [archived, setArchived] = useState(false);
  
  const { loading, error, data } = useQuery(GET_IDEA, {
    variables: { id: ideaId },
    onCompleted: data => {
      console.log(data)
      setTitle(data.idea.title);
      setDescription(data.idea.description);
      setType(data.idea.type);
      setTags(data.idea.tags);
      setArchived(data.idea.archived);
      setIsPublic(data.idea.is_public);
    }
  });
  const [updateTitle] = useMutation(UPDATE_TITLE);
  const [updateDescription] = useMutation(UPDATE_DESCRIPTION);
  const [updateType] = useMutation(UPDATE_TYPE);
  const [updateIsPublic] = useMutation(UPDATE_IS_PUBLIC, {
    onCompleted: data => setIsPublic(data.updateIdea.is_public),
  });
  const [updateArchived] = useMutation(UPDATE_ARCHIVED, {
    onCompleted: data => setArchived(data.updateIdea.archived),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const createdDate = new Date(data.idea.created_date);

  return (
    <>
      <Navbar activeKey="/develop" />
      <Container>
        <h1 className="m-4">Develop an Idea</h1>
        <Card className="m-4">
          <Card.Header>
            <Form.Control
              className="form-control-lg form-control-plaintext"
              type="title"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onBlur={() => updateTitle({ variables: { id: ideaId, title }})}
            />
          </Card.Header>
          <Card.Body>
            <Form.Control
              as="textarea"
              className="form-control-plaintext"
              style={{ height: '100px' }}
              type="text"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              onBlur={() => updateDescription({ variables: { id: ideaId, description }})}
            />
            <Form.Control
              className="form-control-plaintext"
              type="text"
              placeholder="Type"
              value={type}
              onChange={e => setType(e.target.value)}
              onBlur={() => updateType({ variables: { id: ideaId, description }})}
            />
            <Card.Text>{createdDate.toDateString()}</Card.Text>
            <Card.Text>Tags:</Card.Text>
            <ListGroup>
              {tags.map(tag =>
                <ListGroup.Item key={tag}>
                  <Card.Text>{tag}</Card.Text>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <Form.Check className="form-check-inline">
              <Form.Check.Input
                className="form-check-input"
                type="checkbox"
                checked={isPublic}
                onChange={() => updateIsPublic({ variables: { id: ideaId, isPublic: !isPublic }})}
              ></Form.Check.Input>
              <Form.Check.Label className="form-check-label text-info">
                Public
              </Form.Check.Label>
            </Form.Check>
            <Form.Check className="form-check-inline">
              <Form.Check.Input
                className="form-check-input"
                type="checkbox"
                checked={archived}
                // onChange={(e) => setArchived(!archived)}
                onChange={() => updateArchived({ variables: { id: ideaId, archived: !archived }})}
              ></Form.Check.Input>
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

export default Develop;


// To do:
// Add tag
// Categorize by medium / type of project (ie. business, movie, etc.)
// Combine with other ideas
// Expand idea