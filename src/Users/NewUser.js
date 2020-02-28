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
                    <label>First Name:  <input  type="text" value={firstName} onChange={newFirstName}/></label>
                    <label>Last Name:   <input  type="text" value={lastName} onChange={newLastName}/></label>
                    <label>Email:   <input  type="text" value={email} onChange={newEmail}/></label>
                    <label>Profile Image Url:   <input  type="text" value={profileImageUrl} onChange={newProfileImageUrl}/></label>
                    <label>Cover Image Url:   <input  type="text" value={coverImageUrl} onChange={newCoverImageUrl}/></label>
                    <input type="submit" value="Submit"/></form>)
        ;}
                