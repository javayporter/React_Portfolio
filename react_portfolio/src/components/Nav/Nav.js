import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
class Nav extends Component {
  render() {
    return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">JAVAY PORTER</Navbar.Brand>
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse> */}
</Navbar>

    )
};
}


export default Nav;