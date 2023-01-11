// PACKAGE IMPORTS
import { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation, gql } from '@apollo/client'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'


// PROJECT IMPORTS
import Navbar from '../components/Navbar.jsx'
import Thot from '../components/Thot'
import NewThot from '../components/NewThot'
import { GET_IDEA, UPDATE_IDEA_TEXT, UPDATE_THOT_ORDER } from '../graphql'

function Idea() {
  const { ideaId } = useParams()

  const [ideaText, setIdeaText] = useState('')
  const [thots, setThots] = useState([])
  const [allOpen, setAllOpen] = useState(null)
  const [showNew, setShowNew] = useState(false)

  const [updateIdeaText] = useMutation(UPDATE_IDEA_TEXT)
  const [updateThotOrder] = useMutation(UPDATE_THOT_ORDER)


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      // console.log(`swap ${dragIndex} and ${hoverIndex}`)
      const dragItem = thots[dragIndex]
      console.log({dragItem})
      const hoverItem = thots[hoverIndex]
      // Swap places of dragItem and hoverItem in the thots array

      setThots(thots => {
        const updatedThots = [...thots]
        updatedThots[dragIndex] = hoverItem
        updatedThots[hoverIndex] = dragItem
        return updatedThots
      })
    },
    [thots],
  )

  const dropListItem = () => {
    const thotIds = thots.map(thot => thot._id)
    const update = { variables: { ideaId, thotIds }}
    console.log(update)

    updateThotOrder(update)
  }

  const { loading, error } = useQuery(GET_IDEA, {
    variables: { id: ideaId },
    onCompleted: ({ idea }) => {
      setIdeaText(idea.text)
      idea.thots && setThots(idea.thots)
    }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const submitIdeaText = (e) => {
    console.log({e})
    updateIdeaText({ variables: { id: ideaId, text: ideaText }})
  }

  return (
    <>
      <Navbar activeKey="/" />

      <Container>
        <Row>
          <Form>
            <h3>
              <Form.Control
                plaintext
                type="text"
                placeholder="Idea"
                value={ideaText}
                onChange={e => setIdeaText(e.target.value)}
                onBlur={e => submitIdeaText()}
              />
            </h3>
          </Form>
        </Row>

        <Row>
          <Accordion alwaysOpen>
            {thots.map((thot, index) =>
              <Thot
                key={thot._id}
                index={index}
                thot={thot}
                all
                moveListItem={moveListItem}
                dropListItem={dropListItem}
              />
            )}
          </Accordion>
        </Row>

        <Row>
          {/* use collapse here? */}
          <Col>
            {showNew ? 
              <Form>
                <NewThot ideaId={ideaId} />
              </Form>
            : null}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Idea
