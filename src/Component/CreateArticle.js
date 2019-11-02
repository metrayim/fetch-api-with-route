import React, { Component } from 'react';
import { Form, Container, Row, Col, Button,Alert } from 'react-bootstrap';
import "./ComponentCss/input.css"

export default class CreateArticle extends Component {
    state = {
        id: '',
        title: '',
        description: '',
        Datas: [],
    }


    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        if (this.props.article) {
            this.setState({
                id: this.props.article.id,
                title: this.props.article.title,
                description: this.props.article.description

            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitArticle(this.state)

    }
    render() {
        const styleTable={
            border:" 0px solid #cccc",
            borderRadius: "30px",
          }
          
          
      
        return (
            <div> 
                <Container className="mt-5">
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={7}>
                                
                            <Form onSubmit={this.onSubmit}  className="input-data"> 
                            <h1 className="mb-4 h-style">Please Input Article</h1>
                                <Form.Group controlId="formBasicEmail" >
                                    <Form.Label className="text-color">Input Title</Form.Label>
                                    <Form.Control className="mb-3 Name-input" placeholder="Enter Title" type="text" name="title" value={this.state.title} onChange={this.onchange} />
                                    <Form.Label className="mt-3 text-color">Input Description</Form.Label>
                                    <Form.Control className=" Name-input" placeholder="Enter Description" type="text" name="description" value={this.state.description} onChange={this.onchange} />

                                </Form.Group>
                                <Button style={styleTable} className="c-btn mt-4" variant="primary" type="submit" value="Submit">
                                    Submit
                            </Button>
                            </Form>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
