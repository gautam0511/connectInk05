import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import '../css/login.css'
import axios from 'axios'
import {setUser} from '../redux/user/userAction'
const Login = () => {
    const history = useHistory()
    const [detail,setDetail] = useState(null)
    const [file,setFile] = useState()
    const {userId}  = useParams()
    const user = useSelector((state)=>state.user);
     const dispatch = useDispatch()
    const onSubmitForm=async (e)=>{
        e.preventDefault();

        const formData = new FormData()
        formData.append('file', file)

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const url = `http://localhost:3007/user/login/${userId}`
        axios.put(url, formData, config).then(res => {
            console.warn('res',res.data)
            setDetail(()=>localStorage.setItem('user-info',JSON.stringify(res.data.data)))
            dispatch(setUser(res.data.data))
            history.push('/')


        }).catch(err => console.log(err))

    }
    const onInputChange = (e)=>{
        setFile(e.target.files[0])
        console.log("file",file)
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
                    <input type="file" onChange={onInputChange}></input>
                   
                    <button type="submit" className="form-btn" >Login</button>
                </form>
            </div>
            </div>

           


        </div>
    )
}

export default Login
