import React from 'react'
import { withRouter } from "react-router";
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../ComponentCss/view.css';
import { connect } from 'react-redux';
import { viewArticle } from '../../Action/articleAction'


class View extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         article: {}
    //     }
    // }

    componentDidMount() {
        console.log(this.props.history, "check history")
        this.props.viewArticle(this.props.match.params.id)

        // fetch("http://api-ams.me/v1/api/articles/" + this.props.match.params.id)
        //     .then(respon => respon.json())
        //     .then(result => {
        //         this.setState({
        //             article: result.DATA
        //         })
        //     })

    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {

        const id = this.props.match.params.id
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        // console.log(id)
        if (id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        // console.log("render")
        // console.log(this.props.match.params)
        // console.log(this.state.article)
        const style = {
            fontFamily: ' Kristi',
            color: '#FF9924',
            fontSize:'100px'
        }

        return (
            <div >
                <Button variant="light"  onClick={this.goBack} className="ml-5 mt-4">ត្រលប់ក្រោយ</Button>
                <Container className="mt-5">
                    <Row>
                        <Col xl={3}></Col>
                        <Col xl={6} >
                            <h1 style={style}>Detail Information</h1>
                            <div className="card">
                                <div className="box">

                                    <div className="img">
                                        <img src={"https://www.malis-restaurant.com/phnompenh/wp-content/uploads/2015/10/fp-slider1.jpg"} />
                                    </div>
                                    <h2>{this.props.article.id}<br /><span>{this.props.article.title}</span></h2>
                                    <p>                     {this.props.article.description}</p>
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
            </div>
        )


    }

}
const mapStatetoProps = (centralstore) => {
    // console.log(centralstore.articleReducer.article,"new View")
    return {
        article: centralstore.articleReducer.article
    }
}

export default connect(mapStatetoProps, { viewArticle })(withRouter(View))
