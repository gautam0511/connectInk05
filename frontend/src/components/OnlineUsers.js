import React from "react";
import '../css/onlineusers.css'
/**
 * @author
 * @function OnlineUsers
 **/

const OnlineUsers = (props) => {
  const { onUserSelect, users, username } = props;
  console.log(username)
  Object.keys(users).map((p) => {
    console.log("p", p);
  })
  return (
    <div>
      <div className="online-users-header">

        <img src="../profile/ConnectInk.png" />
      </div>
      <div className="online-users">
     <h3>CHAT WITH ONLINE USERS</h3>
      <ul className="users-list">
     
     
      
        
     {users &&
       Object.keys(users).map((user, index) => (
         <>
           {user !== username ? (
             <li id="list-users" key={user} onClick={() => onUserSelect(user)}>
             
                 <span id="users">{user}</span>
            
             </li>
           ) : null}
         </>
       ))}
   </ul>
      </div>
      
    </div>
  );
};

export default OnlineUsers;