import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../Table/Tables.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";


export default class Tables extends Component {

    render() {

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
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.userInfo.map(user => {

                                let { userId: id, name, email } = user

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
                                        <Button color="danger" onClick={() => this.props.deleteUser(id)}>
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


Tables.propTypes = {
    userInfo: PropTypes.array.isRequired
}