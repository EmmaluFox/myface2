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
                    <label>New User:</label>
                        <input  type="text" value={firstName} onChange={newFirstName}/>
                        <input  type="text" value={lastName} onChange={newLastName}/>
                        <input  type="text" value={email} onChange={newEmail}/>
                        <input type="submit" value="Submit"/></form>)
        ;}
                