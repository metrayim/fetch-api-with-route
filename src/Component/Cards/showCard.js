import React, { Component } from 'react';
import '../Cards/Card.css';
import { connect } from 'react-redux'
import {  Container, Row, Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class showCard extends Component {

    
    render() {
        const text = {
            color: "#fff",
            marginBottom: ".8rem",
            position: "relative",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "2rem",
            textAlign: "center" 
        }
        const style = {
            border: " 2px solid #cccc",
            borderRadius: "30px",
            width: "100px"
        }
        var post = <div><h1 style={text}>Articles are Loading....</h1></div>
        if (this.props.articles){
            post =
            <div>
            <div className="social-box">
                <Container>
                    <Row>
                        {this.props.articles.map(article => (
                            <Col className="text-center" lg={4} xs={12} key={article.ID}>
                                <div className="box">
                                    {/* <i className="fa fa-behance fa-3x" aria-hidden="true"></i> */}
                                    {/* <i class="fab fa-facebook-f"></i> */}
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <div className="box-title">
                                        <h5>{article.TITLE}</h5>
                                    </div>
                                    <div className="box-text">
                                        <span>{article.DESCRIPTION}</span>
                                    </div>
                                    <div className="box-btn">
                                       {/* <Button>View</Button> */}
                                       <Link to={'/detail/' + article.ID}> <Button style={style} className="mr-2 mt-1" variant="success">view</Button></Link>
                                    </div>
                                </div>
                            </Col>

                        ))}
                    </Row>
                </Container>
            </div>
        </div>
        }
        return (post)
    }
}
const mapStateToProp = (centralStore) => {
    return {
        articles: centralStore.articleReducer.articles
    }
}
export default connect(mapStateToProp)(showCard);