import React, { useEffect, useState } from 'react'
import '../css/contact.css'
import axios from 'axios'
import ContactItem from './ContactItem'
const ContactList = () => {
    const [reciever,setReciever] = useState('')
   
let localUser = JSON.parse(localStorage.getItem('user-info'))
console.log('localUser',localUser);

    return (

        <div className="container-contact">
            <div className="profile-info">
            {
                localUser ?  <img className="profile-image" src={localUser.profilePic}></img> 
                : 
                <img className="profile-image" src="../profile/Connectink.png"></img>
            }
               
            </div>
            <div className="search-box">
                <div className="search-container">
                    <img className="search-icon" src="/profile/search-icon.jpg"></img>
                    <input className="search-input" placeholder="Search or start a new chat"></input>
                </div>
            </div>
            

           
            <ContactItem />
            

        </div>
    )
}

export default ContactList
