import React, { useState } from 'react';


const RegisterForm = props => {
    const [ state, setState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

    // this code below confirms the different messages the user will get for the form if submitted succefully or not.
    let message;
    if(state.submitted){
        message=<h1>You have submitted the form</h1>;
    }else{
        message=<h1>You have not yet submitted the form</h1>;
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(state);
        setState({
            ...state,
            submitted: true
        })
    }


    // or without stating the code above that confirms the message condition. we can write this code below to give different messages depending on the condition of the form. The code should be written just above the <form>

    // {state.submitted ? <h1>You have submitted the form</h1> : <h1>You have not yet submitted the form</h1>}

    // or if we wanted no message to render except only when the form is submitted we can write this code below instead
    
    // {state.submitted && <h1>You have submitted the form</h1>}

    
    return(
        <>
            <p>{message}</p>
            <form onSubmit={onSubmitHandler}>
                {/* this {' '} below makes sure there is a space btw the label and the input  */}
                <label>First Name{' '}</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {/* this code below ensures adding realtime validation to firstName and its condition "length must be atleast 2 characters" */}
                {state.firstName.length < 2 ? <small>First Name must be at least 2 characters</small>: true}
                <br/>
                {/* this &nbsp; below also makes sure there is a space btw the label and the input          */}
                <label>Last Name&nbsp;</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {/* this code below ensures adding realtime validation to lasttName and its condition "length must be atleast 2 characters" */}
                {state.lastName.length < 2 ? <small>last Name must be at least 2 characters</small>: true}
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {/* this code below ensures adding realtime validation to email and its condition "length must be atleast 2 characters" */}
                {state.email.length < 2 ? <small>Email must be at least 2 characters</small>: true}
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {/* this code below ensures adding realtime validation to password and its condition " length must be atleast 8 characters" */}
                {state.password.length < 8 ? <small>Password must be at least 8 characters</small>: true}
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                {/* this code below ensures adding realtime validation to confirm password and its condition "must be atleast 8 characters" by comparing the length of pasword and confirmPassword values*/}
                {state.password !== state.confirmPassword ? <small>Password must match</small>: true}
                <br/>
                <input type = "submit"/>        
            </form>
        </>
    );
}

export default RegisterForm;
