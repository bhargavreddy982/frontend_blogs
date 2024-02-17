import {React,useState,useContext} from 'react'
import {Navigate} from'react-router-dom';
import { UserContext } from '../UserContext';

import '../App.css';

const LoginPage = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
// to rdirect to home page
const[redirect,setRedirect]=useState(false);

const{setUserInfo}=useContext(UserContext);

 async function  login(ev){
    ev.preventDefault();
  const response= await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
      credentials:"include",
    });

    if(response.ok){
      response.json().then(userInfo=>{
        setUserInfo(userInfo);  //redirected to home page
        setRedirect(true);
      })


    } else{
      alert("wrong details bro..!")
    }
  }




 if(redirect){
  return<Navigate to={'/'}/>
 }

 

  
  return (
    <form className='login' onSubmit={login}>
        <h1>
            Login
        </h1>
        <input  type ="text" placeholder="username"  value={username}   onChange={ev=>setUsername(ev.target.value)}/>
        <input type="password" placeholder="password" value={password}   onChange={ev=>setPassword(ev.target.value)} />
         <button>
            LOGIN
         </button>
    </form>
  )
}

export default LoginPage