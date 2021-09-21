import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client'
import CreateUser from './components/CreateUser';
import Messages from './components/Messages';
import OnlineUsers from './components/OnlineUsers';

const socket = io('http://localhost:3007')


function App() {
  const [users, setUsers] = useState({});
  const [username, setUsername] = useState('');
  const [receiver, setReceiver] = useState('');
  const [steps, setSteps] = useState(0)
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const oncreateUser = () => {
    socket.emit('new_user', username);
    setSteps(1);
  }
  const onSend = (e) => {
    e.preventDefault()
    const data = {
      sender: username,
      receiver,
      message
    }
    socket.emit('send_message', data)
    setMessage('')
    setSteps(2)
  }

  const onUserSelect = (username) => {
    setReceiver(username)
    setSteps(2)
  }

  useEffect(() => {
    socket.on('connect', () => {
      console.warn( socket.id)
    })
    socket.on('all_users', (users) => {
      setUsers(users)
    })

  }, [])

  useEffect(() => {
    socket.on('send_message', (arg) => {
      console.log(arg)
    })
    socket.on('new_message', (data) => {
      setChat([...chat, data])
    })
  }, [message])

  console.warn("chat", chat)
  return (
    <div>
      {
        steps === 0 ? <CreateUser oncreateUser={oncreateUser}
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
          : null
      }
      {
        steps === 1 ? <OnlineUsers onUserSelect={onUserSelect}
          users={users}
          username={username}
        />
          : null
      }
      {
        steps === 2 ? <Messages onSend={onSend}
          chat={chat}

          value={message}
          onChange={(e) => setMessage(e.target.value)}

        /> : null
      }


    </div>
  );
}

export default App;


