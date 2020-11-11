import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.state.postData}
                     addPost={props.addPost}
                     updateText={props.updateText}
                     newText={props.state.newTextPost}/>
        </div>
    )
};

export default Profile;