import React, { useEffect,useState,useContext } from 'react'
import {useParams} from 'react-router-dom'
import '../App.css';
import {formatISO9075} from 'date-fns'
import {UserContext} from "../UserContext"
import { Link } from 'react-router-dom';


const PostPage = () => {
    const [postInfo,setPostInfo]=useState(null);
    const {userInfo}=useContext(UserContext);
    const {id}= useParams();
    useEffect(()=>{
     
        fetch(`http://localhost:4000/post/${id}`).then(response=>{
            response.json().then (postInfo=>{
                setPostInfo(postInfo);

            })
        })
    },[]);
    if(!postInfo) return '';


  return (
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      
      <div className="author"> by @{postInfo.author.username}</div>
       
       
        <div className='image'>

        </div>
       
        <img src={`http://localhost:4000/${postInfo.cover}`}/>
        {userInfo.id===postInfo.author._id && (
        <div className='edit-row'>
          <Link className='edit-button' to={`/edit/${postInfo._id}`}>
            Edit this post</Link>
        </div>
       )}
   
   <div className='content' dangerouslySetInnerHTML={{__html:postInfo.content} }/>
    </div>
  )
}

export default PostPage