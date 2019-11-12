import React from "react";
import auth from "./Auth";
import { Button } from 'react-bootstrap';
import './App.css'
import { Container, Col, Row, Carousel } from 'react-bootstrap'
const LandingPage = props => {

  return (
    <div className=" mt-5">
      <Container >
        <Row>

          <Col>
            <Carousel>
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
                  src="//static.showit.co/1600/I5B9SBOlTlWMoQRLYAWorQ/88845/sunrise-enagement-shoot.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption >
                  <h3>AND THIS SLIDE I DON'T KNOW  HOW TO SAY</h3>
                  <p>START FROM HERE END FROM HERE</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel>
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
                  <h4>WE STUDY AT KOREA SOFTWARE HRD</h4>
                  <p>IS THE PALCE THAT KEEP ME THERE</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="//static.showit.co/1600/I5B9SBOlTlWMoQRLYAWorQ/88845/sunrise-enagement-shoot.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h4>AND THIS SLIDE I DON'T KNOW  HOW TO SAY</h4>
                  <p>START FROM HERE END FROM HERE</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <h1 style={textStyle} className='mt-5'>Welcom To My Web Site The Place That You Want To See</h1>
      <div className="login mt-5">

        <Button variant="light" style={style} onClick={() => {
          auth.login(() => {
            props.history.push("/article");
          })
        }}>ចូលប្រព័ន្ធ
      </Button>
      </div>

    </div>
  );
};
export default LandingPage;
const textStyle = {
  marginLeft: '440px',
  fontFamily: ' Kristi',
  color: '#FF9924'
}
const style = {
  border: " 2px solid #cccc",
  borderRadius: "10px",
  width: "100px",
  color: '#FF9924'
}
const text = {
  fontFamily: ' Kristi',
  color: '#FF9924'
}