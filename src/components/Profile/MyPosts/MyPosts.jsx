import React from "react";
import './MyPosts.scss';
import Postt from "./Post/Post";

let addPostArea = React.createRef()

let addPost = () => {
    let text = addPostArea.current.value;
    alert (text); 
}


const MyPosts = (props) => {

    let postCreate = props.posts.map(p => <Postt message={p.message}
         likeCount={p.likeCount} />);

    return (
        <div className='postsBlock'>
            <div>
                My posts
            </div>
            <div>
                <textarea ref ={addPostArea} ></textarea>
            </div>
            <div>
               <button onClick={addPost} >  Add post </button>
            </div>
            <div className="userPosts">
                {postCreate}
            </div>

        </div>
    )
}

export default MyPosts;