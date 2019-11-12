import React, { Component } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../AboutUs/aboutUs.css';
import Footer from '../Footer/footer'

class aboutUs extends Component {
    
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="//static.showit.co/1600/I5B9SBOlTlWMoQRLYAWorQ/88845/sunrise-enagement-shoot.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>AND THIS SLIDE I DON'T KNOW  HOW TO SAY</h3>
                            <p>START FROM HERE END FROM HERE</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="//static.showit.co/1600/16BNNtdFRFmyD90GbuIrJw/88845/coupled-with-grace-moodboard.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>ABOUT US</h3>
                            <p>WELCOME TO MY WEB SITE THAT I TRY TO DO IT</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="//static.showit.co/1600/HerrM2I6Rt6BMwhQ0cr07Q/88845/coupled-with-grace-desktop-flatlay.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>WE STUDY AT KOREA SOFTWARE HRD</h3>
                            <p>IS THE PALCE THAT KEEP ME THERE</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <Container>
                    <Row>
                        <Col md={5}className="no-padding lib-item" data-category="view">
                            <div className="lib-panel">
                                <div className="row box-shadow">
                                    <div className="col-md-6">
                                        <img className="lib-img-show" src="http://lorempixel.com/850/850/?random=123" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="lib-row lib-header">
                                            Example library
                                <div className="lib-header-seperator"></div>
                                        </div>
                                        <div className="lib-row lib-desc">
                                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                            </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}></Col>
                        <Col lg={6}className="no-padding lib-item" data-category="view">
                            <div className="lib-panel">
                                <div className="row box-shadow">
                                    <div className="col-md-6">
                                        <img className="lib-img-show" src="http://lorempixel.com/850/850/?random=456" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="lib-row lib-header">
                                            Example library
                                <div className="lib-header-seperator"></div>
                                        </div>
                                        <div className="lib-row lib-desc">
                                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                            </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row> 
                        <Col lg={6}className="no-padding lib-item" data-category="view">
                            <div className="lib-panel">
                                <div className="row box-shadow">
                                    <div className="col-md-6">
                                        <img className="lib-img-show" src="http://lorempixel.com/850/850/?random=123" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="lib-row lib-header">
                                            Example library
                                <div className="lib-header-seperator"></div>
                                        </div>
                                        <div className="lib-row lib-desc">
                                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                            </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}></Col>
                    </Row>
                    <Row>
                        <Col lg={6}></Col>
                        <Col lg={6}className="no-padding lib-item" data-category="view">
                            <div className="lib-panel">
                                <div className="row box-shadow">
                                    <div className="col-md-6">
                                        <img className="lib-img-show" src="http://lorempixel.com/850/850/?random=456" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="lib-row lib-header">
                                            Example library
                                <div className="lib-header-seperator"></div>
                                        </div>
                                        <div className="lib-row lib-desc">
                                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                            </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                <Footer/>
            </div>
        )
    }
}
export default aboutUs;