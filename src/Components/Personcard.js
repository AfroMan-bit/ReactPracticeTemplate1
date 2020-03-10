// import this below from the default "App.js file in the src folder"
import React from 'react';


class Personcard extends React.Component {

    // for a class you need methods like "render"
    render() {
        // then we can return the Personcard component we had in the "App.js" file in the src folder
        // we can also add css to the field set like shown below
        return (
            <fieldset style={{width: "150px"}} className="box">
                    <h2>{this.props.firstName}, {this.props.lastName}</h2>
                    <h5> Age: {this.props.age}</h5>
                    <h5> Hair Color: {this.props.haircolor}</h5>
            </fieldset>
        );
    }
}
//  this below makes sure this file knows what to give to another file which is exporting "Personcard" to other files
export default Personcard;