// PACKAGE IMPORTS
import { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// PROJECT IMPORTS
import NewThot from './NewThot';
import { UPDATE_THOT_TEXT } from '../graphql';

function ThotList({ parent, ideaId, thots, showNew }) {
  return (
    <ul>
      {thots.map(t =>
        <Thot key={t._id} thot={t} inner={true}/>
      )}
      
      {showNew ? 
        <Form>
          <li>
            <NewThot key={'0'} ideaId={ideaId} parent={parent} />
          </li>
        </Form>
        : null
      }
    </ul> 
  )
}

function ThotFormControl({ value, onChange, submitThotText }) {
  return (
    <Form.Control
      plaintext
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      onBlur={e => submitThotText()}
    />
  )
}

function Thot({ thot, inner }) {
  const { _id, ideaId, text, children = [] } = thot;

  const [thotText, setThotText] = useState('');
  const [showNew, setShowNew] = useState(false);
  
  const [updateThotText, { loading, error }] = useMutation(UPDATE_THOT_TEXT);

  useEffect(() => {
   setThotText(text)
  }, [text]);

  const submitThotText = () => {
    if (thotText !== text) {
      updateThotText({ variables: { _id, text: thotText }});
    }
  }

  if (inner) {
    return (
      <>
        <Form>
          <li>
            <ThotFormControl
              value={thotText}
              onChange={setThotText}
              submitThotText={submitThotText}
            />
          </li>
        </Form>

        {children.length ? <ThotList parent={_id} ideaId={ideaId} thots={children} /> : null}
      </>
    )
  }

  return (
    <>
      <Card>
        <Form>
          <ThotFormControl
            value={thotText}
            onChange={setThotText}
            submitThotText={submitThotText}
          />
        </Form>

        {children.length ? <ThotList parent={_id} ideaId={ideaId} thots={children} /> : null}


        {showNew ?
          <Row>
            <Col>
              <Form>
                <NewThot ideaId={ideaId} parent={_id} />
              </Form>
            </Col>
            <Col>
              <Button variant="outline-secondary" size="sm" onClick={() => setShowNew(false)}>-</Button>
            </Col>
          </Row>
        :
          <Row>
            <Col>
              <Button variant="outline-secondary" size="sm" onClick={setShowNew}>+</Button>
            </Col>
          </Row>
        }
      </Card>
    </>
  )
}

export default Thot;