import React from 'react';
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap';
import '../ComponentCss/c-Narbar.css';
import {withRouter} from 'react-router'
class  NarBar extends React.Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        const style={
            border:" 2px solid #cccc",
          borderRadius: "30px",
          width:"100px"
          }
          console.log(this.props.history)

        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">អត្ថបទ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">ទំព័រដើម</Nav.Link>
                        <Nav.Link href="/aboutus">អំពីយើង</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl style={style} type="text" placeholder="ស្វែងរក" className="mr-sm-2" />
                        <Button style={style} variant="outline-success">ស្វែងរក</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    
}

export default (withRouter(NarBar))
