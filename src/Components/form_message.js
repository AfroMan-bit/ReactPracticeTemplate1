import React, { useState } from 'react';


const RegisterForm = props => {
    const [ state, setState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        // this below confirms if form is submitted empty???
        submitted: false
    })


    const onChangeHandler = e => {
        e.preventDefault();
        console.log(state);
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(state);
        setState({
            ...state,
            submitted: true
        })
    }


    return(
        <>

            {setState.submitted && <h1> You have submitted your form</h1>}
            <form onSubmit={onSubmitHandler}>
                {/* this {' '} below makes sure there is a space btw the label and the input  */}
                <label>First Name{' '}</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>
                {/* this &nbsp; below also makes sure there is a space btw the label and the input          */}
                <label>Last Name&nbsp;</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>
                <input type = "submit"/>        
            </form>
        </>
    );
}

export default RegisterForm;
