import React, { useEffect,useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';


const Header = () => {

  const{setUserInfo,userInfo}=useContext(UserContext);



  useEffect(()=>{
    fetch('https://backend-services-l8dt.onrender.com/profile',{
      credentials:'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
       
      });
    });
  },[]);


function logout(){
  //invalidate cookie to logout
  
  fetch('https://backend-services-l8dt.onrender.com/logout',{
    credentials:'include',
    method:'POST'
  });
  // setUserInfo(null);
  setUserInfo(null);
}


 const username=userInfo?.username;

  return (
    <header>
    <Link  to="/" className='logo'>
      My
      <font color="green">Blog</font>
        
      </Link>
    <nav>
      {username &&(
        <>
        <Link to="/create"> CREATE NEW POST</Link>
      <a    onClick={logout}
      style={{ cursor: 'pointer' }} // Inline style for cursor
      >  
        LOGOUT
      </a>
        </>
      )}

      {!username &&(
        <>
 
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

        </>
      )

      }
      
    </nav>
  </header>
  )
}

export default Header
