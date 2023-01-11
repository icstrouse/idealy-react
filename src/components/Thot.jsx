// PACKAGE IMPORTS
import { useState, useEffect, useRef } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import { useDrag, useDrop } from 'react-dnd'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'

// PROJECT IMPORTS
import NewThot from './NewThot'
import { UPDATE_THOT_TEXT } from '../graphql'

function ThotList({ parent, ideaId, thots, showNew }) {
  return (
    <ul>
      {/* use accordion here */}
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

function Thot({ thot, index, moveListItem, dropListItem, inner }) {
  const { _id, ideaId, text, children = [] } = thot

  const [thotText, setThotText] = useState('')
  const [showNew, setShowNew] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  
  const [updateThotText, { loading, error }] = useMutation(UPDATE_THOT_TEXT)

  useEffect(() => {
   setThotText(text)
  }, [text])

  const submitThotText = () => {
    if (thotText !== text) {
      updateThotText({ variables: { _id, text: thotText }})
    }
  }

  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
        isDragging: monitor.isDragging(),
    }),
  })


  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      const dragIndex = item.index
      const hoverIndex = index
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

      moveListItem(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
    drop: (item, monitor) => {
      dropListItem()
    }
  })

  // Join the 2 refs together into one (both draggable and can be dropped on)
  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))

  // Make items being dragged transparent, so it's easier to see where we drop them
  const opacity = isDragging ? 0 : 1

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
      <Accordion.Item eventKey={_id} ref={dragDropRef} style={{ opacity }} >
        <Accordion.Header>
          <Form>
            <Form.Control
              plaintext
              type="text"
              value={thotText}
              onChange={e => setThotText(e.target.value)}
              onBlur={submitThotText}
            />
          </Form>
        </Accordion.Header>

        <Accordion.Body class="accordion-body">
          <ThotList parent={_id} ideaId={ideaId} thots={children} />
        </Accordion.Body>
      </Accordion.Item>
  )
}

export default Thot