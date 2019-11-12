import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import '../ComponentCss/c-Narbar.css';
import { withRouter } from 'react-router'
class NarBar extends React.Component {
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        const style = {
            border: " 2px solid #cccc",
            borderRadius: "10px",
            width: "100px"
        }
        console.log(this.props.history)

        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">អត្ថបទ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto bg-dark">
                        <Nav.Link href="/">ទំព័រដើម</Nav.Link>
                        <Nav.Link href="/aboutus">អំពីយើង</Nav.Link>
                        <Nav.Link href="/contact">ទំនាក់ទំនង</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default (withRouter(NarBar))
