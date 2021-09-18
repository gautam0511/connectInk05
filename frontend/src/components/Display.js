import React from 'react'
import '../css/display.css'
import ContactList from './ContactList';
import ConversationList from './ConversationList';
const Display = () => {
    return (
        <div>
            <div className="container">


                <ContactList />
                {/* {
   chat ?:<div className="placeholder">
   <img className="chat-placeholder" src="/profile/whatsapp-promo.png"></img>
     <span>Welcome To ConnectInk</span>
   </div>
 } */}
                <ConversationList />

            </div>
        </div>
    )
}

export default Display
