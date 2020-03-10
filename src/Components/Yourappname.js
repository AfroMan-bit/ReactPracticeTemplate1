// import this below from the default "App.js file in the src folder"
import React from 'react';
// OR 
// import React, { Component } from 'react';
// then we write the class this way below
// class Yourappname extends Component {

// }

// then create a class here that inherits from something by using the keyword "extends". "Yourappname" came be renamed to suit the purpose of the project.

class Yourappname extends React.Component {

    // this below to add also other functions to this "class Yourappname" which is also known as class based components.
    constructor(props) {
        super(props);
        // this below to add also other functions to this "class Yourappname" which is also known as class based components.
        this.state = {
            // then what we want for example "likes" that counts from 0
            likes: 0
        };
    }


    // for a class you need methods like "render"
    render() {
        // then we can return the Yourappname component we had in the "App.js" file in the src folder
        return (
            <fieldset>
                <legend>
                    <h4>{this.props.tableheader1}</h4>
                </legend>
                <ul>
                    <li>TableContent: {this.props.tablecontent}</li>
                    <li>TableContent: {this.props.tablecontent}</li>
                    <li>TableContent: {this.props.tablecontent}</li>
                </ul>
                    <button onClick={e => this.setState({...this.state, likes: this.state.likes +1})}> {this.state.likes}</button>
            </fieldset>
        );
    }
}
//  this below makes sure this file knows what to give to another file which is exporting "Yourappgame" to other files
export default Yourappname;