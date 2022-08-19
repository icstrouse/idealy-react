import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <Nav
      className="navbar navbar-expand-lg navbar-dark bg-primary mt-5"
      activeKey="/"
    >
      <div className="container-fluid">
        <Nav.Link className="navbar-brand" href="#">
          <img src="./logo1.png" width="100" height="50" className="d-inline-block align-top" alt="Bootstrap" loading="lazy"></img>
        </Nav.Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Nav.Link className="nav-link active" aria-current="page" href="/">Home</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link" href="/review">Review</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link" href="/develop">Develop</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link" disabled>Extra</Nav.Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search"></Form.Control>
            <Button className="btn-outline-light" type="submit">Search</Button>
          </form>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;