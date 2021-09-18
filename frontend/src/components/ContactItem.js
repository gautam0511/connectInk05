import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { setReciever } from '../redux/reciever/recieverAction'
import '../css/contact.css'
import axios from 'axios'


const ContactItem = () => {
    const [userData, setChat] = useState([])
    console.warn(userData)
    const reciever = useSelector((state)=>state)
    const dispatch= useDispatch()
    useEffect(() => {
        axios.get('http://localhost:3007/user/users')
            .then(res => setChat(res.data.user))
    }, [])
    console.log(userData)

   const showDetails =(user)=>{
        dispatch(setReciever(user))
   }

    return (

        <div className="contactitem">
            <ul >
                {
                    userData.map((user) => {
                        return (

                            <div className="contact-item" onClick={()=>showDetails(user)}>
                                <img className="profile-image-person" src={user.profilePic}></img>
                                <div className="contact-info">
                                    <span className="contact-name">{user.name}</span>

                                    <span className="message-text">Hey</span>
                                </div>
                                <span className="message-time">5:30 PM</span>



                            </div>
                        )
                    })





                }
            </ul>




        </div>
    )
}
export default ContactItem