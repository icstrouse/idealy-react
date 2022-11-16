import { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import Form from 'react-bootstrap/Form';

import { ADD_THOT } from '../graphql';

function NewThot({ ideaId, parent, format }) {
  const [thotText, setThotText] = useState('');

  const [addThot, { loading, error }] = useMutation(ADD_THOT);

  const submitThot = () => {
    const variables = { ideaId, parent, text: thotText, format: 'blah' }
    console.log('add thot: ', variables)
    addThot({ variables });
  }

  return (
    <Form.Control
      type="text"
      placeholder={'Add a thought'}
      value={thotText}
      onChange={e => setThotText(e.target.value)}
      onBlur={submitThot}
    />
  );
}

export default NewThot;
