import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return <div className='content'>
        <ProfileInfo />
        <MyPosts 
            posts={props.posts} 
            dispatch={props.dispatch} 
            newPostText={props.newPostText} 
        />
    </div>;
}

export default Profile;