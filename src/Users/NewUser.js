import React, {useEffect, useState} from "react";

export function NewUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email   , setEmail] = useState("");
    
    function newFirstName(event) {
        setFirstName(event.target.value);}
   
    function newLastName(event) {
        setLastName(event.target.value);}

    function newEmail(event) {
        setEmail(event.target.value);}


    function handleSubmit(event) {
    event.preventDefault(); event.send("https://localhost:5001/users")}
    
    
            return (
                <form className="newUserForm" onSubmit={handleSubmit}>
                    <label>First Name:<input  type="text" value={firstName} onChange={newFirstName}/></label>
                    <label>Last Name: <input  type="text" value={lastName} onChange={newLastName}/></label>
                    <label>Email:  <input  type="text" value={email} onChange={newEmail}/></label>
                        <input type="submit" value="Submit"/></form>)
        ;}
                