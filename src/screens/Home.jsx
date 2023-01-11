import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { useGeolocated } from 'react-geolocated'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

import Navbar from '../components/Navbar.jsx'
import { ADD_IDEA } from '../graphql'

function Home() {
  const navigate = useNavigate()

  const [ideaText, setIdeaText] = useState('')

  const [addIdea, { loading, error }] = useMutation(ADD_IDEA)

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })
  console.log({coords})

  const submitIdeaText = () => {
    if (ideaText) {
      addIdea({ variables: { text: ideaText }})
        .then(({ data }) => {
          console.log({data})
          navigate(`/idea/${data.addIdea._id}`)
        })
    }
  }

  return (
    <>
      <Navbar activeKey="/" />

      <Container>
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
      </Container>
    </>
  )
}

export default Home
