import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Feed = () => {
    const [post, setpost] = useState([{

      _id:1,
      image:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      caption: "Beautiful Scenery"
    }])

useEffect(()=>{

  axios.get(`${import.meta.env.VITE_API_URL}/api/posts`)
  .then((res)=>{
    console.log(res.data);
    setpost(res.data.posts)
  })

},[])

  return (
    <>
    <section className='feed-section'>
      
      {
        post.length > 0 ? (
          post.map((post)=> (
            <div key={post._id} className='post-card'>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
             
             <Link to="/create-post">
             <button className='btn btn-primary btn-sm mt-2 '
             >Add post</button></Link>
                
              
            </div>
          ))
        ): (
          <h1>No Post available</h1>
        )
      } 
    </section>
    </>
  )
}

export default Feed