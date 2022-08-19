import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Navbar from '../components/Navbar.jsx';

// To do:
// Option for tag
// Automatically saves time and location

function Home() {
  return (
    <div>
      <Navbar />

      <h1 className="m-4">Enter an Idea</h1>

      <Form className="m-4">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control
            type="text"
            placeholder="Enter Idea Here"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Control
            type="text"
            placeholder="Describe your idea in more detail..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formType">
          <Form.Select>
            <option selected>Select a type</option>
            <option value="Purchase">Purchase</option>
            <option value="Adventure">Adventure</option>
            <option value="Project">Project</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Add tags"
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Home;
