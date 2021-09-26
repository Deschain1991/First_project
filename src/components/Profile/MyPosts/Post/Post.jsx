import React from "react";
import './Post.scss';


const Post = (props) => {
  return (
    <div className='Post__item'>
      {props.message}
      <div>
        <span className='Post__span'>Like</span>
        {props.likeCount}
      </div>
    </div>
  )
}

export default Post;