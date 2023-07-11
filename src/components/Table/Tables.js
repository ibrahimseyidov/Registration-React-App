import React, { Component } from 'react';
import styles from "../Table/Tables.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { TextField } from '@mui/material';


export default class Tables extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            fname: "",
            eMail: "",
            Id: ""
        };
    }

    toggle = (id) => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            Id: id.id
        }));
    }

    handleName = (e) => {
        let nameValue = e.target.value
        console.log(nameValue);
        this.setState({ fname: nameValue })
    }

    handleEmail = (e) => {
        let emailValue = e.target.value;
        this.setState({ eMail: emailValue })
    }

    changeStateStatus = () => {
        this.setState({modal: false})
    }

    render() {

        const { modal } = this.state;

        return (

            <div className={styles["tables-container"]} >
                <Table dark className={styles["table-contain"]}>
                    <thead>
                        <tr>
                            <th>
                                User ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.userinfo.map(user => {

                                let { userId: id, name, email } = user
                                let { fname, eMail, Id } = this.state

                                return <tr key={id}>
                                    <th scope="row">
                                        {id}
                                    </th>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {email}
                                    </td>
                                    <td>

                                        <Button color="primary" onClick={() => this.toggle({ id })}>
                                            Edit
                                        </Button>
                                        <Modal isOpen={modal} toggle={this.toggle}>
                                            <ModalHeader toggle={this.toggle}>Change User Information</ModalHeader>
                                            <ModalBody>
                                                <TextField
                                                    helperText="Please enter your name"
                                                    id="demo-helper-text-aligned"
                                                    label="Name"
                                                    style={{ marginRight: "10px" }}
                                                    onChange={this.handleName}
                                                />
                                                <TextField
                                                    helperText="Please enter your email"
                                                    id="demo-helper-text-aligned"
                                                    label="Email"
                                                    onChange={this.handleEmail}
                                                />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="success" onClick={() => this.props.changeState(this.changeStateStatus,fname,eMail,Id)}>
                                                    Change Info
                                                </Button>
                                                <Button color="secondary" onClick={this.toggle}>
                                                    Cancel
                                                </Button>
                                            </ModalFooter>
                                        </Modal>

                                    </td>
                                    <td>
                                        <Button color="danger" onClick={() => this.props.deleteuser(id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </Table>
            </div >
        )
    }
}


// () => this.props.changeuserinfo(fname, eMail, Id)