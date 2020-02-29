import React, {useEffect, useState} from "react";

export function NewUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email   , setEmail] = useState("");
    const [profileImageUrl   , setProfileImageUrl] = useState("");
    const [coverImageUrl   , setCoverImageUrl] = useState("");
    
    function newFirstName(event) {
        setFirstName(event.target.value);}
   
    function newLastName(event) {
        setLastName(event.target.value);}

    function newEmail(event) {
        setEmail(event.target.value);}

    function newProfileImageUrl(event) {
        setProfileImageUrl(event.target.value);}

    function newCoverImageUrl(event) {
        setCoverImageUrl(event.target.value);}


    function handleSubmit(event) {
    event.preventDefault(); event.send("https://localhost:5001/users")}
    
    
            return (
                <form className="newUserForm" onSubmit={handleSubmit}>
                    <section className="formItem"><label>First Name:  </label>
                        <input  type="text" value={firstName} onChange={newFirstName}/></section>

                    <section className="formItem"><label>Last Name:  </label>
                        <input  type="text" value={lastName} onChange={newLastName}/></section>
                    <section className="formItem"><label>Email:  </label>
                        <input  type="text" value={email} onChange={newEmail}/></section>
                    <section className="formItem"><label>Profile Image:  </label>
                        <input  type="text" value={profileImageUrl} onChange={newProfileImageUrl}/></section>
                    <section className="formItem"><label>Cover Image:  </label>
                        <input  type="text" value={coverImageUrl} onChange={newCoverImageUrl}/></section>
                    <section className="formItem"><input className="submitButton" type="submit" value="Submit"/></section></form>)
        ;}
                