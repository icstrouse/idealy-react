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
      : null}
    </ul> 
  )
}

function Thot({ thot, inner }) {
  const { _id, ideaId, text, children = [] } = thot;

  const [thotText, setThotText] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  
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
            <Form.Control
              plaintext
              type="text"
              value={thotText}
              onChange={e => setThotText(e.target.value)}
              onBlur={submitThotText}
            />
          </li>
        </Form>

        {children.length ?
          <ThotList parent={_id} ideaId={ideaId} thots={children} />
        : null}
      </>
    )
  }

  return (
    <>
      <Card>
        <Row>
          <Col className="col-1">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <span>&rarr;</span> : <span>&darr;</span>}
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <span>&#45;</span> : <span>&#43;</span>}
            </Button>
          </Col>

          <Col>
            <Form>
              <Form.Control
                plaintext
                type="text"
                value={thotText}
                onChange={e => setThotText(e.target.value)}
                onBlur={submitThotText}
              />
            </Form>

            {!collapsed && children.length ?
              <ThotList parent={_id} ideaId={ideaId} thots={children} />
            : null}
          </Col>
        </Row>
        
        {showNew ?
          <Row>
            <Form>
              <NewThot ideaId={ideaId} parent={_id} />
            </Form>
          </Row>
        : null}
      </Card>
    </>
  )
}

export default Thot;