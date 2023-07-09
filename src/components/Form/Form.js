import React, { Component } from 'react'
import styles from "../Form/Form.module.css"
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Container, TextField, Button } from "@mui/material";


export default class Form extends Component {

    render() {
        return (
            <>

                <Container maxWidth="sm" className={styles["form-container"]}>

                    <div className={styles["register-container"]}>
                        <HowToRegIcon />
                        <h2>Register Form</h2>
                    </div>

                    <form className={styles["register-inp new"]}>

                        <div className={styles["register-inp"]}>
                            <TextField
                                helperText="Please enter your name"
                                id="demo-helper-text-aligned"
                                label="Name"
                                style={{ marginRight: "20px" }}
                                onChange={this.props.getNameInfo}
                            />
                            <TextField
                                helperText="Please Enter Your Email"
                                id="demo-helper-text-aligned-no-helper"
                                label="Email"
                                onChange={this.props.getEmailInfo}
                            />
                        </div>

                        <div className={styles["register-btn"]}>

                            <Button variant="contained" color="success" onClick={this.props.registerUserInfo}>
                                Register
                            </Button>
                        </div>


                    </form>


                </Container>
            </>



        )
    }
}
