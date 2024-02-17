
import '../App.css';
import {useState} from 'react'


const RegisterPage = () => {

  

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');



    async function register(ev){
    ev.preventDefault();

    
     const response=await fetch('https://blogs-deploy.onrender.com/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{"Content-Type":"application/json"},
    });
    if(response.status==200){
      alert('registration succesfull');

    }
    else{
      alert('registration failed')
    }
  }

   
  return (
    <form className='register'  onSubmit={register}>
        <h1>
            Register
        </h1>
        <input  
        type ="text"
         placeholder="username" 
         value={username}
         onChange={ev=>setUsername(ev.target.value)}
        />
        <input type="password" placeholder="password" 
        value={password}
        onChange={ev=>setPassword(ev.target.value)}/>
         <button>
            REGISTER
         </button>
    </form>
  )
}

export default RegisterPage