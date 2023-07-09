import React, { Component } from 'react';
import Form from "./components/Form/Form";
import Tables from "./components/Table/Tables";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class App extends Component {

  constructor() {
    super()

    this.state = {

      newUserInfo: {
        userId: "",
        name: "",
        email: ""
      },

      filteredUser: [
        {
          userId: 234783,
          name: "John Doe",
          email: "johndoe@gmail.com"
        },
        {
          userId: 294271,
          name: "Elon Musk",
          email: "elonmusk@gmail.com"
        },
        {
          userId: 794720,
          name: "Bill Gates",
          email: "billgates@gmail.com"
        },
        {
          userId: 122653,
          name: "Emily Johnson",
          email: "emily.johnson@example.com"
        },
        {
          userId: 293846,
          name: "Benjamin Thompson",
          email: "benjamin.wilson@example.com"
        },
        {
          userId: 234798,
          name: "Olivia Davis",
          email: "olivia.davis@example.com"
        },
        {
          userId: 482134,
          name: "Ethan Anderson",
          email: "ethan.anderson@example.com"
        },
      ]

    }

    this.registerUserInfo = this.registerUserInfo.bind(this)
    this.getNameInfo = this.getNameInfo.bind(this)
    this.getEmailInfo = this.getEmailInfo.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  registerUserInfo() {
    let userInfo = this.state.filteredUser
    let newUserInfo = this.state.newUserInfo;
    let inputArea = document.getElementById("demo-helper-text-aligned")
    let inputAreaEmail = document.getElementById("demo-helper-text-aligned-no-helper")
    if (newUserInfo.email === "" || newUserInfo.name === "") {

      toast.error('Please, Enter Name and Email!');
      return
    }
    this.setState({ filteredUser: [...userInfo, newUserInfo] })
    console.log(inputArea);
    inputArea.value = ""
    inputAreaEmail.value = ""
    toast.success('Congratulations! Registration Process is Successful!');
  }

  getNameInfo(e) {

    let randomNumber = Math.floor(Math.random() * 900000) + 100000;

    this.setState({
      newUserInfo: {
        userId: randomNumber,
        name: e.target.value
      }
    })
  }

  getEmailInfo(e) {
    this.setState(prevState => ({
      newUserInfo: { ...prevState.newUserInfo, email: e.target.value }
    }))
  }

  deleteUser(key) {

    let filter = this.state.filteredUser.filter(user => {
      return user.userId !== key
    })

    this.setState({ filteredUser: filter }, () => {
      console.log(console.log(this.state));
    });

    toast.success('Registration Information Deleted with Successful!');


  }


  render() {

    let filteredUser = this.state.filteredUser

    return (
      <>
        <ToastContainer />

        <Form registerUserInfo={this.registerUserInfo} getNameInfo={this.getNameInfo} getEmailInfo={this.getEmailInfo} />
        <Tables userInfo={filteredUser} deleteUser={this.deleteUser} />
      </>

    );
  }

}





