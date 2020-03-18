import React, {Component} from 'react';

export default class FoodInput extends Component  {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.appendList = this.appendList.bind(this);

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A food item was updated ' + this.state.value);
    //   document.getElementById('display').innerHTML = this.state.value;
        let node= document.createElement("DIV");
        let textnode = document.createTextNode(this.state.value);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("display").appendChild(node);
      event.preventDefault();
    }

    appendList() {
        let node= document.createElement("LI");
        let textnode = document.createTextNode(this.state.value);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("display").appendChild(node);
    }
  
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
        <div id="display"></div>
        </>
      );
    }
  }