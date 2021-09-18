import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import '../css/login.css'
import {setUser} from '../redux/user/userAction'
import axios from 'axios'
const Signup = () => {
    const history = useHistory()
    const [detail,setDetail] = useState(null)
    const [username,setUsername] = useState('')
    const [phone,setPhone] = useState('')
    const user = useSelector((state)=>state.user);
    console.log("hello user",user);
     const dispatch = useDispatch()
    const onSubmitForm=async (e)=>{
        e.preventDefault()
        const field={
            name:username,
            phone:phone
        }
        console.log(field)
      
        const response = await fetch('http://localhost:3007/user/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(field)
        })
        const data = await response.json();
        console.log(data);
       
        console.log(data);
        dispatch(setUser(data));
       
        history.push(`/login/${data.users._id}`)
    }
    return (
        <div>
            <div className="login-heading">
                <h1>Welcome To Connectink</h1>
                <span>SignUp your account with correct details...</span>
                <div className="login-logo">
                <img src="../profile/Connectink.png" ></img>
                </div>
                <div>
                <form onSubmit={onSubmitForm}  className="form-section">
                    <input type="text" placeholder="name" className="form-input" onChange={(e)=>setUsername(e.target.value)}></input>
                    <input type="text" placeholder="phone"  className="form-input" onChange={(e)=>setPhone(e.target.value)}></input>
                    <button type="submit" className="form-btn" >Signup</button>
                </form>
            </div>
            </div>

           


        </div>
    )
}

export default Signup
