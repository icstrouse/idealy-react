import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useGeolocated } from "react-geolocated";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Navbar from '../components/Navbar.jsx';
import { ADD_IDEA } from '../graphql';

function Home() {
  const [showDetail, setShowDetail] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [tags, setTags] = useState('');

  const [addIdea, { loading, error }] = useMutation(ADD_IDEA);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  console.log({coords})

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const date = new Date();
    const variables = {
      title,
      description,
      createdDate: date.toString(),
      createdPlace: (isGeolocationAvailable && isGeolocationEnabled)
        ? [coords.latitude, coords.longitude]
        : [],
      type,
      tags: [tags],
      isPublic: true,
      archived: false,
    }
    
    console.log('Submitting: ', variables);
    addIdea({ variables });

    setTitle('');
    setDescription('');
    setType('');
    setTags('');
    setShowDetail(false);
    setShowType(false);
    setShowTags(false);
  }

  const handleReset = () => {
    // Add "Are you sure?" prompt
    setTitle('');
    setDescription('');
    setType('');
    setTags('');
    setShowDetail(false);
    setShowType(false);
    setShowTags(false);
  }

  return (
    <>
      <Navbar activeKey="/" />
      <Container className="text-center">
        <h1 className="m-4">What's on your mind?</h1>

        <Form className="m-4">
          <Row>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Control
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            </Form.Group>
          </Row>

          <Row>
            <Col>
              {showDetail ?
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Control
                    type="text"
                    placeholder="Describe your idea in more detail..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </Form.Group>
              :
                <Button onClick={setShowDetail}>
                  Elaborate
                </Button>
              }
            </Col>

            <Col>
              {showType ?
                <Form.Group className="mb-3" controlId="formType">
                  <Form.Select value={type} onChange={e => setType(e.target.value)}>
                    <option value="">Select a type</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Project">Project</option>
                  </Form.Select>
                </Form.Group>
              :
                <Button onClick={setShowType}>
                  Categorize
                </Button>
              }
            </Col>

            <Col>
              {showTags ?
                <Form.Group className="mb-3" controlId="formTags">
                  <Form.Control
                    type="text"
                    placeholder="Add tags"
                    value={tags}
                    onChange={e => setTags(e.target.value)}
                  />
                </Form.Group>
              :
                <Button onClick={setShowTags}>
                  Add Tags
                </Button>
              }
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </Col>

            <Col>
              <Button type="submit" onClick={handleReset}>Reset</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Home;


// To do:
// Option for tag
// Automatically saves time and location
