import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { listItem: '' };
        this.appendList = this.appendList.bind(this);
    }

    // getListData() {
    //     let url = 'http://localhost:5000/api/food';

    //     fetch(url)
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             appendData(data);
    //         })
    //         .catch(function (err) {
    //             console.log('error: ' + err);
    //         });


    // }

    appendList() {

        let url = 'http://localhost:5000/api/food';

        // fetch(url)
        // .then((resp) => resp.json()) // Transform the data into json
        // .then(function(data) {
        //   // Create and append the li's to the ul
        //   console.log(data)

        //   return document.getElementById("display").innerHTML(data);
        //   let node = document.createElement("DIV");
        //   let textnode = document.createTextNode(data);         // Create a text node
        //   node.appendChild(textnode);                              // Append the text to <li>
        //   document.getElementById("display").appendChild(node);

        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

        function appendData(data) {
            var mainContainer = document.getElementById("display");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = data[i];
                mainContainer.appendChild(div);
            }
        }
          }
        


    render() {
        return (
            <>
            {this.appendList()}
    <div id="display"></div>
            </>
        )
    }

}



