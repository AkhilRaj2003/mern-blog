import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'



const PostAuthor = () => {
  return (
   <Link to={`/posts/users/sdfsdf`} class name='posts__author'>
   
    <div className="posts__author-avatar">
      <img src={Avatar} alt="" />
    </div>
    <div className="posts__author-details">
      <h5>By: Ernest oliver</h5>
      <small>Just Now</small>
    </div>
   </Link>
  )
}

export default PostAuthor