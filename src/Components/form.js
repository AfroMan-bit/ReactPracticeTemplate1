import React, { useState } from 'react';


const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        event.preventDefault();
        console.log(formState);
        // this above shows us the information we type into the form in our console and also can be used to create dynamic forms that validates forms in real time
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    // the below can also be written in a shorter code like this below in reference to "event"
    // const onSubmitHandler = e => {
    //     e.preventDefault();
    //     console.log(formState);
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
        // this above shows us the information we type into the form in our console and also can be used to create dynamic forms that validates forms in real time
    
    }
    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>        
                <label>Last Name</label>
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
                <input type="submit" />     
            </form>
            <br></br>
            {/* SHOWING INPUT DATA IN REAL TIME AND ALSO IN THE CONSOLE */}
            <h5> Your Form Data</h5>
            <h5>First Name: {formState.firstName} </h5>
            <h5>Last Name: {formState.lastName} </h5> 
            <h5>Email: {formState.email} </h5>
            <h5>Password: {formState.password} </h5>
            <h5>Confirm Password: {formState.confirmPassword} </h5>
        </>
    );
}

export default RegisterForm;
