import React from 'react';
import {Navbar,Nav,FormControl,Form,NavDropdown,Button} from 'react-bootstrap';
import '../Component/ComponentCss/c-Narbar.css'
const NarBar = () => {
    const style={
        border:" 2px solid #cccc",
      borderRadius: "30px",
      width:"100px"
      }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">អត្ថបទ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">ទំព័រដើម</Nav.Link>
                    <Nav.Link href="/app">បន្ថែម</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl style={style} type="text" placeholder="ស្វែងរក" className="mr-sm-2" />
                    <Button style={style} variant="outline-success">ស្វែងរក</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NarBar
