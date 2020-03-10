// import this below from the default "App.js file in the src folder"
import React from 'react';


const Personcard = (props) => {
    return (
        <fieldset style={{width: "150px"}} className="box">
            <h2>{props.firstName}, {props.lastName}</h2>
            <h5> Age: {props.age}</h5>
            <h5> Hair Color: {props.haircolor}</h5>
        </fieldset>
        );
}
//  this below makes sure this file knows what to give to another file which is exporting "Personcard" to other files
export default Personcard;