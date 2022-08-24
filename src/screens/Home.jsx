import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Navbar from '../components/Navbar.jsx';

const ADD_IDEA = gql`
  mutation AddIdea($title: String!, $description: String!, $createdDate: String!, $createdPlace: [Float]!, $type: String!, $tags: [String], $isPublic: Boolean) {
    addIdea(title: $title, description: $description, created_date: $createdDate, created_place: $createdPlace, type: $type, tags: $tags, isPublic: $isPublic) {
      _id
      title
      description
      created_date
      created_place
      type
      tags
      parent
      isPublic
      archived
    }
  }
`;

function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [tags, setTags] = useState('');

  const [addIdea, { loading, error }] = useMutation(ADD_IDEA);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const date = new Date();
    const variables = {
      title,
      description,
      createdDate: date.toString(),
      createdPlace: [40.01431655883789, -104.9876937866211],
      type,
      tags: [tags],
      isPublic: true,
    }
    
    console.log('Submitting: ', variables);
    addIdea({ variables });

    setTitle('');
    setDescription('');
    setType('');
    setTags('');
  }

  return (
    <>
      <Navbar activeKey="/" />
      <Container className="text-center">
        <h1 className="m-4">Enter an Idea</h1>

        <Form className="m-4">
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control
              type="text"
              placeholder="Enter Idea Here"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Control
              type="text"
              placeholder="Describe your idea in more detail..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formType">
            <Form.Select value={type} onChange={e => setType(e.target.value)}>
              <option value="">Select a type</option>
              <option value="Purchase">Purchase</option>
              <option value="Adventure">Adventure</option>
              <option value="Project">Project</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTags">
            <Form.Control
              type="text"
              placeholder="Add tags"
              value={tags}
              onChange={e => setTags(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;


// To do:
// Option for tag
// Automatically saves time and location
