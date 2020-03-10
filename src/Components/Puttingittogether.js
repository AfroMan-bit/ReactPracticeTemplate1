// import this below from the default "App.js file in the src folder"
import React from 'react';


class Puttingittogether extends React.Component {

    render() {
        return (
            <>
                    <h2>{this.props.firstName}, {this.props.lastName}</h2>
                    <h5> Age: { Number (this.props.age) + Number (this.state.clickCount) }</h5>
                    <h5> Hair Color: {this.props.haircolor}</h5>
                    <br></br>
                    <button onClick={this.clickAddage} count={this.state.clickCount}> Birthday Button for {this.props.lastName} {this.props.firstName}</button>
            </>
        );
    }
    // this below to add also other functions to this "class Puttingittogether" which is also known as class based components.
    // we add the function below the "render" class Puttingittogether becausewe cant call a function above the components 
    constructor(props) {
        super(props);
        // this below to add a function to this "class Puttingittogether" which is also know as class based components.
        this.state = {
            // then what we want for example "clickCount" that counts from 0
            clickCount: 0
        }
    }
    // this below adds other functions to this "class Puttingittogether" like for example adding the "clickCount" function above to the age through the <button> tag above.
    clickAddage = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    } 

}

export default Puttingittogether;