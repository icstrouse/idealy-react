import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Navbar from '../components/Navbar.jsx';

// To do:
// Option for tag
// Automatically saves time and location

function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting: ', title, description, type, tags);

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
