import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Navbar({ activeKey }) {
  return (
    <Nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      activeKey={activeKey}
    >
      <Container>
        <Nav.Link className="navbar-brand" href="/">
          <strong>!</strong>
        </Nav.Link>

        <Button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Nav.Link className="nav-link" aria-current="page" href="/">Home</Nav.Link>
            </li>

            <li className="nav-item">
              <Nav.Link className="nav-link" href="/ideas">Ideas</Nav.Link>
            </li>

            {/* <li className="nav-item">
              <Nav.Link className="nav-link" href="/map">Map</Nav.Link>
            </li> */}

            <li className="nav-item">
              <Nav.Link className="nav-link" disabled>Coming soon...</Nav.Link>
            </li>
          </ul>

          <Form className="d-flex" role="search">
            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search"></Form.Control>
            <Button className="btn-outline-light" type="submit">Search</Button>
          </Form>
        </div>
      </Container>
    </Nav>
  )
}

export default Navbar
