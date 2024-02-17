import React,{useEffect,useState} from 'react'
import Post from '../Post'

const IndexPage = () => {

  const [posts,setPosts]=useState([]);
  //when we mount our component
  useEffect(()=>{
    fetch('https://blogs-deploy.onrender.com/post').then(response=>{
response.json().then(posts=>{
  setPosts(posts);
});
    });

  })
  return (
    <div>
        
        {posts.length>0 && posts.map(post=>(
          <Post {...post}/>
        ))}

        
    </div>
  )
}

export default IndexPage