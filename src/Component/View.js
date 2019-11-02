import React from 'react'
import { withRouter } from "react-router";
import { Card, Container, Row, Col, Text } from 'react-bootstrap'
import '../Component/ComponentCss/view.css'


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {}
        }
    }

    // async componentDidMount() {
    //     const respon= await  fetch("http://api-ams.me/v1/api/articles/" + this.props.match.params.id)
    //     const json=await respon.json();
    //     this.setState({article:json.DATA})
    //     console.log(json.DATA)

    // }
    componentDidMount() {
        fetch("http://api-ams.me/v1/api/articles/" + this.props.match.params.id)
            .then(respon => respon.json())
            .then(result => {
                this.setState({
                    article: result.DATA
                })
            })

    }

    render() {

        const id = this.props.match.params.id
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        // console.log(id)
        if (id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        console.log("render")
        console.log(this.props.match.params)
        console.log(this.state.article)
        const style = {
            color: "#00FF47"
        }
        return (
            <div >
                {/* <h1>
                    {this.state.article.DESCRIPTION}
                    {this.state.article.TITLE}
                </h1> */}
                <Container className="mt-5">
                    <Row>
                        <Col xl={3}></Col>
                        <Col xl={6} style={style}>
                        <h1 style={style}>ពត័មានលំអិត</h1>
                            <div className="card">
                                <div className="box">
                                  
                                    <div className="img">
                                        <img src={"https://www.malis-restaurant.com/phnompenh/wp-content/uploads/2015/10/fp-slider1.jpg"}/>
                                            </div>
                                        <h2>{this.state.article.ID}<br/><span>{this.state.article.TITLE}</span></h2>
                                            <p>                     {this.state.article.DESCRIPTION}</p>
                                            <span>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </span>
                                </div>
                                    </div> 
                         
                        </Col>
                                <Col xl={3}></Col>
                    </Row>
                </Container>

                        {/* {this.state.article.map(art => {
                    <ViewDetail
                        title={art.ID}
                    />
                })} */}
            </div>
                    )
            
            
                }
            
            }
            
            export default withRouter(View)
const ViewDetail = (props) => {
    return <div>{props.title}</div>
                    }
