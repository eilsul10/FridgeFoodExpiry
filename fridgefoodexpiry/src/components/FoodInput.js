import React, {Component} from 'react';
// import express from 'express';

export default class FoodInput extends Component  {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.appendList = this.appendList.bind(this);

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A food item was updated ' + this.state.value);
    //   document.getElementById('display').innerHTML = this.state.value;
        // let node= document.createElement("DIV");
        // let textnode = document.createTextNode(this.state.value);         // Create a text node
        // node.appendChild(textnode);                              // Append the text to <li>
        // document.getElementById("display").appendChild(node);
      event.preventDefault();

      // Example POST method implementation:
async function postData(url = 'http://localhost:5000/api/food', data = this.state.value) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

postData('http://localhost:5000/api/food', { foodItem: this.state.value })
  .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  })
  .catch((error) => {
    console.log(error);
  })
  ;
    }

    // appendList() {
    //     let node= document.createElement("LI");
    //     let textnode = document.createTextNode(this.state.value);         // Create a text node
    //     node.appendChild(textnode);                              // Append the text to <li>
    //     document.getElementById("display").appendChild(node);
    // }
  
    render() {
      return (
        <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Food:
            <input id="user_input" type="text" value={this.state.value} onChange={this.handleChange} onClick={this.appendList} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <div id="display"></div> */}
        </>
      );
    }
  }