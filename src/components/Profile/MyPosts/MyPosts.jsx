import React from "react";
import './MyPosts.scss';
import Postt from "./Post/Post";
import {addPostActionCreator,updateNewPostTextActionCreator } from "../../../redux/state";



const MyPosts = (props) => {


    let addPost = () => {
        let text = addPostArea.current.value;
      //  props.addPost(text);
        props.dispatch( addPostActionCreator() )
        addPostArea.current.value = "";
    }

    let postCreate = props.posts.map((p) => <Postt message={p.message} likeCount={p.likeCount} />);
    let addPostArea = React.createRef()

    let onPostChange = () => {
        let text = addPostArea.current.value;
       // props.updateNewPostText(text);
       // let action= {type: 'UPDATE-NEW-POST-TEXT' ,newText:text};
        let action= updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }    

    return (
        <div className='postsBlock'>
            <div>
                My posts
            </div>
            <div>
                <textarea onChange={onPostChange} ref={addPostArea} value={props.newPostText} />
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