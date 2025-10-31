import React from 'react'
import { Navbar, Nav, Container,} from 'react-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark" className="shadow-lg py-3">
      <Container>
        <div className="d-flex align-items-center gap-2">
          <img src="https://th.bing.com/th/id/R.1a551aa4cba59342dff2decfbaa9c8dd?rik=KQTDhx1ZUAAfjA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-template-png-logo-templates-1655.png&ehk=9MRokJPqMM6lr6AsMn50qqBGQgGuPYXFuTzMFbKjOa8%3d&risl=&pid=ImgRaw&r=0" alt="logo" width="40" className="rounded-circle shadow-sm" />
          <Navbar.Brand to="/" className="fw-bold fs-4 text-info">
            DISCALC
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-flex align-items-center gap-4">
            <Nav.Link to="/" className="text-light ">
              Home
            </Nav.Link>
            <Nav.Link to="/discount" className="text-light ">
              Calculator
            </Nav.Link>
            <Nav.Link to="/movies" className="text-light ">
              Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header