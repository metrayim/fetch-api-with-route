import React, { Component } from 'react';
import { Table, Button, Modal, ModalBody, ModalFooter, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ComponentCss/FetchData.css"
import { Link } from 'react-router-dom'
import ModalHeader from 'react-bootstrap/ModalHeader';

export default class FetchData extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        Datas: [],
        wait: false,
        viewArticle: {},
        show: true,
        modalIsOpen: false,
        alert: false
    }
    componentDidMount() {
        fetch("http://api-ams.me/v1/api/articles?page=1&limit=15")
            .then(resp => resp.json())
            .then(result => {
                // console.log(result.DATA)
                this.setState({ Datas: result.DATA })
            })
            .catch(error => (console.log(error)))


        // console.log("dwdw")

    }
    deleteData = (dataId) => {
        console.log(dataId)
        const { Datas } = this.state;
        const apiUrl = 'http://api-ams.me/v1/api/articles/' + dataId;
        const formData = new FormData();
        formData.append('productId', dataId);
        // formData.append('productId', productId); 
        fetch(apiUrl, { method: 'DELETE', body: formData })
            .then(rep => rep.json())
            .then(result => {
                this.setState({ Datas: Datas.filter(data => data.ID !== dataId), modalIsOpen: false, alert: true })
                console.log("dwdw")
                console.log(result.DATA)

            })
    }
    toggleModal = () => {
        this.setState({ modal: !this.state.modalIsOpen })
        console.log('toggle')
    }
    handleClose = () => this.setState({ modalIsOpen: false });
    handleShow = (dataID) => {
        this.setState({ modalIsOpen: true, id: dataID })
        // console.log(dataID)
        // return dataID
    }

    render() {
        const style = {
            border: " 2px solid #cccc",
            borderRadius: "30px",
            width: "100px"
        }
        const styleTable = {
            border: " 0px solid #cccc",
            borderRadius: "30px",
        }
        const alerystale={
            width:"200px"
        }
        return (
            <div>
                <Alert style={alerystale} variant="danger" show={this.state.alert} onClose={() => { this.setState({ alert: false }) }} dismissible>
                    <Alert.Heading >Oh! your data has gone</Alert.Heading>
                    <p>
                        Delete already !!!!!
                        
                    </p>
                </Alert>
                {this.state.show ? <Table style={styleTable} striped bordered hover variant="light" responsive className=" table c-fetch-table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Datas.map(data => (
                            <tr key={data.ID}>
                                <td>{data.ID}</td>
                                <td>{data.TITLE}</td>
                                <td>{data.DESCRIPTION}</td>
                                <td style={{ margin: 'auto' }}>
                                    <Button style={style} className="mr-2 mt-1" variant="danger" onClick={() => { this.handleShow(data.ID) }}>Delete</Button>
                                    <Button style={style} className="mr-2 mt-1" variant="warning" onClick={() => { this.props.onEdit(data.ID) }}>Edit</Button>
                                    <Link to={'/detail/' + data.ID}> <Button style={style} className="mr-2 mt-1" variant="success">view</Button></Link>
                                    {/* onClick={() => { this.deleteData(data.ID) */}
                                    <Modal show={this.state.modalIsOpen} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>សំណួរ</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>តើអ្នកប្រាកបអត់ថាចង់លុបវា?</Modal.Body>
                                        <Modal.Footer>

                                            <Button variant="secondary" onClick={this.handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={(e) => { this.deleteData(this.state.id) }}>
                                                Save Changes
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>
                                </td>
                            </tr>
                        ))}


                    </tbody>

                </Table>

                    : <div>
                        <h1>helldoo</h1>
                        {this.state.viewArticle.map(article => (
                            <View
                                title={article.TITLE}
                                des={article.DESCRIPTION}
                            />
                        ))}
                    </div>}




            </div>
        )
    }
}
const View = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.Des}</h1>
        </div>

    )
}