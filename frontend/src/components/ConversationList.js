import React,{useState,useEffect} from 'react'

import '../css/conversation.css'
import io from 'socket.io-client'
import { useSelector,useDispatch } from 'react-redux'
const socket = io.connect("http://localhost:3007");

const ConversationList = () => {
 
let localuser = JSON.parse(localStorage.getItem('user-info'))
console.log('localstore',localuser)
const [message,setMessage] = useState('');
const [chat,setChat] = useState([])
const user = useSelector((state)=>state.reciever.reciever)

console.log("userProfile",user)
const sendform = (e)=>{

    e.preventDefault()
    console.log(message);

    setMessage('')
}
useEffect(()=>{
    socket.on("connect", () => {
        console.log(socket.id); 
       
      });
},[])
    const isYours=false
    return (
        <div className="container-conversation">
           <div className="profile-header">
           {
               user ?  <img className="profile-image" src={user.profilePic}></img>:
               <img className="profile-image" src="../profile/Connectink.png"></img>
           }
        
            {user? user.name:<p>Connectink</p>}
           </div>
           <div className="message-container">
           {
               isYours ? <div className="message-div-true" >
            <div className="message-true" >
                Hi
            </div>
            </div>:<div className="message-div-false"  >
            <div className="message-false" >
                Hi
            </div>
            </div>
           }
            
           </div>
           <div className="chatbox">
           <div className="search-container">
           {/* <Picker
            onEmojiClick={onEmojiClick}
            pickerStyle={{position:"absolute",bottom:"60px"}} /> */}
           <img className="emoji-image" src="/profile/smiley-face-icon-png-19.jpg"></img>
           <form onSubmit={sendform} className="msg-form-section">

           <input className="search-input" placeholder="Type a message" type="text" 
            onChange={(e)=>setMessage(e.target.value)}>
            
           </input>
           <button type="submit" className="msg-btn" >Send</button>
           </form>
           </div>
           </div>
        </div>
    )
}

export default ConversationList
